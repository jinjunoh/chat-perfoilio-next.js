import React from 'react';
import BlogCard from '../molecules/BlogCard';

const blogs = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jin-jun-oh/",
    imgSrc: "linkedin.png",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jj__oh/",
    imgSrc: "instagram.png",
  },
  {
    name: "Github",
    link: "https://github.com/jinjunoh/",
    imgSrc: "github.png",
  },
];

function BlogCards({ isDetailed }) {
  return (
    <>
      {blogs.map(({ name, link, imgSrc }, idx) => {
        return (
          <BlogCard
            name={name}
            link={link}
            imgSrc={imgSrc}
            key={idx}
            isDetailed={isDetailed}
          />
        );
      })}
    </>
  );
}

export default BlogCards;
