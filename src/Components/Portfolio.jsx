/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GitHub Student Developer Pack",
    description:
      "With GitHub Global Campus,your work will speak for itself.Build your portfolio, grow your network, and level up your skills.",
    url: "https://education.github.com/students",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Free education for who interested about Frontend Development. Also you can join some Practicums, Bootcamps and Workshops.",
    url: "https://app.patika.dev/paths/baslangic-seviye-frontend-web-development-patikasi",
  },
  {
    title: "Blog Site",
    description:
      "Made with Python-Flask. A Website that allows you login, register, write comments, share posts.",
    url: "https://github.com/ardaocakkk/flask-blog-site-PYTHON",
  },
  {
    title: "AI Flappy Bird",
    description:
      "Flappy Bird Game with AI. Made with Python.",
    url: "https://github.com/ardaocakkk/Flappy-Bird-AI",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
