import React from 'react';

const LeaderboardCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80">
      <h2 className="text-xl font-semibold mb-4">{user.name}</h2>
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600">Rank: {user.rank}</p>
        <p className="text-gray-600">Peers: {user.peers}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Skills to Upskill</h3>
        <ul className="list-disc list-inside">
          {user.skillsToUpskill.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Skills Good At</h3>
        <ul className="list-disc list-inside">
          {user.skillsGoodAt.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderboardCard;