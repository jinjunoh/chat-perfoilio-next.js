import React from 'react';
import ExperienceCard from '../molecules/ExperienceCard';

const experiences = [
  {
    name: "HackTx, ProCore - Promoting Mental Health in Construction - 2nd place",
    position: "HIFI",
    date: "Oct 2023",
    imgSrc: "hifi.png",
    link: "https://devpost.com/software/hifi-m6q3c5",
    works: [
      "Led a team of 4 to develop a fully functional website and chatbot aimed to promote wellness of minority workforce",
      "Implemented feedforward neural networks with Keras and TensorFlow reaching 98.75% accuracy with 50 epoch",
      "Optimized model performance by integrating seamless serialization-deserialization process utilizing Joblib",
      "Partnered with The B1M to raise awareness of mental health in construction for the Get Construction Talking initiative",
      "Won 2nd place of HackTx, ProCore - Promoting Mental Health in Construction",
    ],
  },
  {
    name: "Backend redesign of BeReal with task management",
    position: "BetterUp",
    date: "May 2023 - Jul 2023",
    imgSrc: "betterup.png",
    // link: 'https://github.com/MubaiHua/ucla-cat',
    works: [
      "Revamped 73.5 million active monthly user BeReal to a microservices back-end architecture with task orchestration",
      "Optimized latency (<20 ms) and server workload by allowing front-end to directly upload image data to the S3 bucket",
      "Reduced query times to database from 6,000 ms to 12 ms by using aggregator functions and indexing foreign keys",
      "Utilized bycrypt hashing algorithm and token-based authentification to ensure the security of user credentials.",
    ],
  },
  {
    name: "Intramural club canvas mobile application",
    position: "LongHorn Connect",
    date: "Nov 2022 - Feb 2022",
    imgSrc: "longhornconnect.png",
    // link: 'https://www.hackster.io/jeffreythecoder/cura-a-health-emergency-alert-for-seniors-we-care-ee08d1',
    works: [
      "Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe",
      "Directed modeling of data structures and API endpoints to allow for seamless frontend integration of Firebase",
      "Redesigned the mobile application to implement server-side rendering with Next.js and monitored traffic using Google Analytics, attracting 58% higher traffic and achieving Lighthouse SEO score of 100",
    ],
  },
];

function ProjectCards({ isDetailed }) {
  return (
    <>
      {experiences.map(({ name, position, date, imgSrc, works, link }, idx) => {
        return (
          <ExperienceCard
            name={name}
            position={position}
            date={date}
            imgSrc={imgSrc}
            works={works}
            // links={links}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default ProjectCards;
