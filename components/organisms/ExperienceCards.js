import React from "react";
import ExperienceCard from "../molecules/ExperienceCard";

const experiences = [
  {
    name: "LPL Financial",
    position: "Software Engineer Intern",
    date: "June 2024 - Present",
    imgSrc: "lplfinancial.png",
    works: [
      "Generated OpenAPI specifications and .NET APIs for profile dashboard, utilized by 22,000+ financial advisors",
      "Modernized ART ClientWorks application by UI implementations and migrating Angular.js from version 8 to 15",
      "Adhered to Test-Driven Development to create unit tests for APIs using NUnit, achieving 90% code coverage",
    ],
  },
  {
    name: "Sage Bionetworks",
    position: "Software Engineer Intern",
    date: "Jan 2024 - May 2024",
    imgSrc: "sagebionetworks.png",
    works: [
      "Developed and shipped Feature Flag service for Synapse, replacing 35+ experimental features utilizing AWS AppConfig and Java Servlet, providing real-time rollbacks, and decoupling code deployments from releases",
      "Optimized rendering cycles by 25%, by migrating legacy GWT data query widgets to React.js and MUI library",
      "Developed node-based visualization tools for data workflows in Synapse using React Flow and TypeScript",
      "Enhanced Github Actions CI/CD pipeline by using Playwright to develop E2E test suites for Synapse Portals ",
    ],
  },
  {
    name: "Texas Luminescence",
    position: "Software Developer",
    date: "Jul 2023 - Present",
    imgSrc: "texaslum.png",
    works: [
      "Integrated Spotify’s OAuth workflow to automate fetching 13+ music metrics with React Native and Express.js",
      "Built core REST APIs and token-based authentication system on Node.js and applied unit testing using Jest",
      "Led a 6-member cross-functional team as project manager, successfully implementing Agile methodology by managing daily scrum meetings to synchronize and share working progress and conducting weekly sprint cycles",
    ],
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
