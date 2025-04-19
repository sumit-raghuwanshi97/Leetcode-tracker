type UserRowProps = {
    username: string;
    streak: number;
    todayCount: number;
    totalSolved: number;
    lastProblem: string;
  };
  
  export default function UserRow({ username, streak, todayCount, totalSolved, lastProblem }: UserRowProps) {
    return (
      <tr className="hover:bg-gray-700">
        <td className="py-3 px-4">{username}</td>
        <td className="py-3 px-4">{streak}</td>
        <td className="py-3 px-4">{todayCount}</td>
        <td className="py-3 px-4">{totalSolved}</td>
        <td className="py-3 px-4">{lastProblem}</td>
      </tr>
    );
  }
  