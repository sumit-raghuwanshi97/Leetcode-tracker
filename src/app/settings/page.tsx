'use client';

import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const [username, setUsername] = useState('');
  const [group, setGroup] = useState<string[]>([]);

  useEffect(() => {
    const savedGroup = localStorage.getItem('groupUsernames');
    if (savedGroup) {
      setGroup(JSON.parse(savedGroup));
    }
  }, []);

  const saveGroup = (newGroup: string[]) => {
    localStorage.setItem('groupUsernames', JSON.stringify(newGroup));
    setGroup(newGroup);
  };

  const addMember = () => {
    if (username && !group.includes(username)) {
      const newGroup = [...group, username];
      saveGroup(newGroup);
      setUsername('');
    }
  };

  const removeMember = (name: string) => {
    const newGroup = group.filter((u) => u !== name);
    saveGroup(newGroup);
  };

  return (
    <div className="min-h-screen bg-[#232D3F] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-[#2e3a50] rounded-2xl shadow-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Manage Group Members</h1>

        <div className="flex gap-2 mb-6">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 bg-[#1f2736] border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter LeetCode username"
          />
          <button
            onClick={addMember}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {group.map((user) => (
            <li
              key={user}
              className="flex justify-between items-center bg-[#1f2736] text-white p-3 rounded-lg"
            >
              <span>{user}</span>
              <button
                onClick={() => removeMember(user)}
                className="text-red-400 hover:text-red-500 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
