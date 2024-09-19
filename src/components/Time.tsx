import React, { useEffect, useState } from "react";

const Time: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );

      // Correctly format the date as "12, Nov, 2023"
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      const formattedDate = now.toLocaleDateString("en-US", options);
      const [day, month, year] = formattedDate.split(" ");
      setCurrentDate(`${day} ${month} ${year}`);
    };

    updateTime(); // Initial call
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="text-right w-[160px] hidden md:inline">
      <div className="text-2xl font-medium text-customBlue font-poppins">
        {currentTime}
      </div>
      <div className="text-xs font-normal text-customBlue font-poppins">
        {currentDate}
      </div>
    </div>
  );
};

export default Time;
