'use client';

import React, { useEffect, useState } from 'react';
import Table from '../components/table';

type User = {
  username: string;
  todayCount: number;
  totalSolved: number;
  streak: number;
  lastProblem: string;
};

type Submission = {
  timestamp: string;
  title: string;
};

type SolvedData = {
  solvedProblem: number;
};

type StreakData = {
  streak: number;
  lastDate: string;
};

export default function LeaderboardScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [groupUsernames, setGroupUsernames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('groupUsernames') || '[]');
    setGroupUsernames(stored);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date().toISOString().slice(0, 10);
      const storedData: Record<string, StreakData> = JSON.parse(localStorage.getItem('leetcode-streaks') || '{}');
      const updatedData: User[] = [];

      setLoading(true);
      setError(null); // Reset error on new request

      try {
        console.log("group", groupUsernames);
        for (const username of groupUsernames) {
          const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/acSubmission`);
          const data = await res.json();

          const solvedRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
          const solvedData: SolvedData = await solvedRes.json();

          const todayAccepted = data.submission.filter((item: Submission) => {
            const date = new Date(parseInt(item.timestamp) * 1000).toISOString().slice(0, 10);
            return date === today;
          });

          const lastProblem = data.submission[0]?.title || '-';

          let streak = 0;
          if (storedData[username]?.lastDate === today) {
            streak = storedData[username].streak;
          } else if (storedData[username]?.lastDate === getYesterdayDate()) {
            streak = storedData[username].streak + (todayAccepted.length > 0 ? 1 : 0);
          } else {
            streak = todayAccepted.length > 0 ? 1 : 0;
          }

          storedData[username] = {
            streak,
            lastDate: todayAccepted.length > 0 ? today : storedData[username]?.lastDate || '',
          };

          updatedData.push({
            username,
            todayCount: todayAccepted.length,
            totalSolved: solvedData.solvedProblem,
            streak,
            lastProblem,
          });
        }

        localStorage.setItem('leetcode-streaks', JSON.stringify(storedData));
        setUsers(updatedData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load leaderboard data. Please try again later.');
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, [groupUsernames]);

  return (
    <main className="min-h-screen bg-[#232D3F] p-4">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">Today&apos;s Leaderboard </h1>

      {loading && <div className="text-white text-center">Loading...</div>} {/* Show loading state */}
      {error && <div className="text-red-600 text-center">{error}</div>} {/* Show error state */}

      {!loading && !error && <Table users={users} />}
    </main>
  );
}

function getYesterdayDate() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().slice(0, 10);
}
