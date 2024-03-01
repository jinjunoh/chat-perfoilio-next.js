import React from "react";
import ExperienceCard from "../molecules/ExperienceCard";

const experiences = [
  {
    name: "Sage Bionetworks",
    position: "Software Engineer Intern",
    date: "Jan 2024 - Present",
    imgSrc: "sagebionetworks.png",
    works: ["Technology Platforms & Services team"],
  },
  {
    name: "Texas Luminescence",
    position: "Backend Developer",
    date: "Jul 2023 - Present",
    imgSrc: "texaslum.png",
    works: ["Build Team: MusicMate"],
  },
  {
    name: "Jober",
    position: "Marketing Research Intern",
    date: "Jul 2021 - Aug 2021",
    imgSrc: "jober.png",
    works: [
      "Conducted extensive research on the latest developments and trends in electronic signature technology, including analyzing industry reports and publications, and consulting with experts in the field",
      "Showcased 30% increase in document processing speed and a 25% reduction in paper usage for improved cost savings and environmental sustainability utilizing Moaform",
    ],
  },
  {
    name: "D. Lab Coding Academy",
    position: "Teaching Assistant",
    date: "Jul 2021",
    imgSrc: "dlab.png",
    works: [
      "Cooperated with professors and TAs to design and implement OOP curriculum in Java with object-oriented concepts, data structures, algorithm development, and debugging techniques used by 20+ intermediate classes",
      "Incorporated 15+ interactive projects and real-world examples, fostering an environment of test driven development",
    ],
  },
];

function ExperienceCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works }, idx) => {
        return (
          <ExperienceCard
            name={name}
            position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default ExperienceCards;
