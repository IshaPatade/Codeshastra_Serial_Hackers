import React from 'react';
import './Leaderboard.css'

const Leaderboard = () => {
  const leaderboardData = [
    { name: 'Jainil Shah', skills: 'React, JavaScript', rank: 5 },
    { name: 'Parhva Vyas', skills: 'HTML, CSS', rank: 15 },
    { name: 'Darsh Shah', skills: 'Python, Django', rank: 22 },
    { name: 'Vedant Kesharia', skills: 'Java, Spring', rank: 33 },
    { name: 'Isha Patade', skills: 'C++, STL', rank: 38 },
    { name: 'Jinish Shah', skills: 'Ruby, Rails', rank: 44 },
  ];

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.skills}</td>
              <td>{player.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;