"use client";
import React, { useState } from "react";
import styles from "./Routine.module.scss";
import { useTask } from "@/store/hooks";

export interface Schedule {
  time: string;
  activity: string;
  completed: boolean;
}

const Routine: React.FC = () => {

  const { schedules, setSchedules } = useTask();

  const handleScheduleChange = (
    index: number,
    time: string,
    activity: string
  ) => {
    const newa = schedules.map((schedule, i) =>
      i === index ? { ...schedule, time, activity } : schedule
    );
    setSchedules(newa);
  };

  const handleCheckboxChange = (index: number) => {
    const news = schedules.map((schedule, i) =>
      i === index ? { ...schedule, completed: !schedule.completed } : schedule
    );
    setSchedules(news);
  };

  return (
    <div className={styles.routine}>
      <div className={styles.containerSchedules}>
        {schedules.map((schedule, index) => (
          <div key={index} className={styles.schedule}>
            <div className={styles.contentTime}>
              <input
                type="time"
                className={styles.time}
                value={schedule.time}
                onChange={(e) =>
                  handleScheduleChange(index, e.target.value, schedule.activity)
                }
              />
              <label
                htmlFor={`checkbox-${index}`}
                className={schedule.completed ? styles.redLabel : ""}
              >
                {schedule.completed ? "Completed" : "Pending"}
              </label>
              <input
                className={styles.check}
                type="checkbox"
                id={`checkbox-${index}`}
                checked={schedule.completed}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
            <textarea
              value={schedule.activity}
              placeholder="Activity"
              onChange={(e) =>
                handleScheduleChange(index, schedule.time, e.target.value)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;
