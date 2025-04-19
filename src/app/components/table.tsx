import UserRow from './userrow';

type TableProps = {
  users: {
    username: string;
    streak: number;
    todayCount: number;
    totalSolved: number;
    lastProblem: string;
  }[];
};

export default function Table({ users }: Readonly<TableProps>) {
  return (
    <table className="w-full table-auto bg-gray-800 rounded-lg overflow-hidden">
      <thead className="bg-gray-900 text-white">
        <tr>
          <th className="py-3 px-4 text-left text-sm font-medium">👤 Username</th>
          <th className="py-3 px-4 text-left text-sm font-medium">🔥 Streak</th>
          <th className="py-3 px-4 text-left text-sm font-medium">✅ Today</th>
          <th className="py-3 px-4 text-left text-sm font-medium">📈 Total</th>
          <th className="py-3 px-4 text-left text-sm font-medium">🧩 Last Problem</th>
        </tr>
      </thead>
      <tbody className="text-gray-300">
        {users.map((user) => (
          <UserRow
            key={user.username}
            username={user.username}
            streak={user.streak}
            todayCount={user.todayCount}
            totalSolved={user.totalSolved}
            lastProblem={user.lastProblem}
          />
        ))}
      </tbody>
    </table>
  );
}
