

import React from "react";
import dayjs from "dayjs"; // For date manipulation

const StreakCalendar = ({ startDate, streakLength }) => {
  const renderCalendar = () => {
    const today = dayjs();
    const start = dayjs(startDate);
    const calendar = [];

    for (let i = 0; i < streakLength; i++) {
      const date = start.add(i, "day");
      const isPast = date.isBefore(today);
      const isToday = date.isSame(today, "day");

      calendar.push(
        <div
          key={i}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            isPast
              ? isToday
                ? "bg-yellow-500"
                : "bg-green-500"
              : "bg-gray-300"
          }`}
        >
          {date.format("D")}
        </div>
      );
    }

    return calendar;
  };

  return <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>;
};

export default StreakCalendar;