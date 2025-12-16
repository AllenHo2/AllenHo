"use client"
import styles from "./projects.module.css"
import Image from "next/image"
import Link from "next/link"
import {imageStyle} from "../style.js"
import { motion } from "framer-motion";
import Animation from "../components/Animation"
import { useEffect } from "react";


const projectNames = [
  {
    id: 1,
    name: "Alloy",
    url: "",
    img: "/Alloy_icon.png",
    description: [
      "Retrieved necessary build and project metadata from Convex, ensuring the correct context for the deployment",
      "Dynamically fetched and decrypted GitHub tokens from PostgreSQL, enabling authenticated repository access for each user on our platform",
      "Gathered user-specific secrets and downloads build assets from S3, extracting them for use in the build environment",
      "Spawned a Docker image to containerize user's repository, injecting all required environment variables (including AWS and S3 credentials) and mounting our SST assets securely",
      "Ran the build process inside a another containerized environment, ensuring consistency and security, with real-time logging and error handling",
      "Deployed user's repository on AWS using our SST configurations and OpenNext"
    ]
  },
  {
    id: 2,
    name: "Envrionmental Impacts in the 21st Centrury",
    url: "https://allenho2.github.io/Environmental-Impacts-in-the-21st-Century/",
    img: "/DataViz.jpg",
    description: [
      "Built bar chart, line chart, parallel line chart, and scatterplot to show the significance of carbon and gas emission effects over time in the U.S.",
      "Designed as research paper with methodology and debrief on each chart&apos;s data and relevant information, including what objective it tackles and what data correlation is shown",
      "Built using Vanilla Javascript, D3.js, D3-legend library, CSS, HTML"
    ]
  },
  {
    id: 3,
    name: "RiscV Emulator",
    url: "https://github.com/cs315-s24/project04-AllenHo2",
    img: "/Emulator.jpg",
    description: [
      "Developed RiscV Emulator that emulated C and Assembly code that I worked on over the semester",
      "Developed code in C that utilizes pointers to emulate registers in RiscV as well as direct-mapped & set-associative cache",
      "Built using C and Assembly"
    ]
  },
  {
    id: 4,
    name: "Elevator Simulator",
    url: "https://github.com/AllenHo2/project02-Elevator",
    img: "/ElevatorCartoon.jpg",
    description: [
      "Developed an Elevator Simulator that simulated a real-world elevator that utilizes a min heap and queues in order to drop passengers off at their closest desired floor while also picking up passengers at the same time to maximize efficiency",
      "Utilizes queues, min-heap, stacks, and linked lists",
      "Built using Java"
    ]
  },
]

const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    textDecoration: "yellow underline ",
};

export default function Projects() {

  useEffect(() => {
    import('../components/Alloy');
  }, []);

  return (
    <Animation>
      <div className={styles.layout}>
        {projectNames.map((project) => (
          <div key={project.id} className={styles.section}>
            <Link href={project.url}>
              <div className={styles.visual}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8}}>
                    <Image
                    src={project.img}
                    alt="project cover"
                    width={300}
                    height={300}
                    style={imageStyle}
                    priority
                    />
                  </motion.div>
              </div>
            </Link>
            <br/>
            <div className={styles.name}>
              <a href={project.url} style={titleStyle}>{project.name}</a>
            </div>
            <br/>
            <div className={styles.description}>
              <ul>
                {project.description.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Animation>
  );
}
