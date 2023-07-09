import React from 'react';
import SkillCard from '../molecules/SkillCard';

const skills = [
  {
    name: "Languages",
    skills: [
      ["JavaScript", 80],
      ["Python", 60],
      ["TypeScript", 85],
      ["HTML/CSS", 85],
      ["C++", 75],
      ["SQL", 70],
      ["Java", 90],
    ],
  },
  {
    name: "Frameworks / Tools",
    skills: [
      ["React", 95],
      ["React Native", 60],
      ["Express", 85],
      ["NodeJS", 85],
      ["Firebase", 80],
      ["MongoDB", 75],
      ["MySQL", 70],
    ],
  },
];

function SkillCards({ isDetailed }) {
  return (
    <>
      {skills.map(({ name, skills }, idx) => {
        return (
          <SkillCard
            name={name}
            skills={skills}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default SkillCards;
