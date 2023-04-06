import React from 'react';
import TimelineCard from './TimelineCard';

const items = [
  {
    title: "Introduction to Solidity Programming",
    description: "Day 1",
    duration: "Event 1 Subtitle",
    level: "This is the first event on the timeline.",
  
  },
  {
    title: "February 2022",
    description: "Event 2",
    duration: "Event 2 Subtitle",
    level: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    description: "Event 3",
    duration: "Event 3 Subtitle",
    level: "This is the third event on the timeline.",
  }
];

const Timeline = () => {
    return (
      <div>
        {items.map((item) => (
          <TimelineCard
            title={item.title}
            description={item.description}
            duration={item.duration}
            level={item.level}
          />
        ))}
      </div>
    );
  };

export default Timeline;