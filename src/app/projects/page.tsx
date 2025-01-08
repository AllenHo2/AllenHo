import styles from "./projects.module.css"
import Image from "next/image"
import Link from "next/link"
import {imageStyle} from "../style.js"

const projectNames = [
  {
    id: 1, 
    name: "Envrionmental Impacts in the 21st Centrury", 
    url: "https://allenho2.github.io/Environmental-Impacts-in-the-21st-Century/", 
    img: "/DataViz.jpg",
    description: [
      <p>Built <strong>bar chart, line chart, parallel line chart,</strong> and <strong>scatterplot</strong> to show the significance of carbon and gas emission effects over time in the U.S.</p>,
      <p>Designed as research paper with methodology and debrief on each chart&apos;s data and relevant information, including what objective it tackles and what data correlation is shown</p>,
      <p>Built using <strong>Vanilla Javascript, D3.js, D3-legend library, CSS, HTML</strong></p>
    ]
  },
  {
    id: 2, 
    name: "Elevator Simulator", 
    url: "https://github.com/AllenHo2/project02-Elevator", 
    img: "/ElevatorCartoon.jpg",
    description: [
      <p>Developed an Elevator Simulator that simulated a real-world elevator that utilizes a min heap and queues in order to drop passengers off at their closest desired floor while also picking up passengers at the same time to maximize efficiency</p>,
      <p>Utilizes <strong>queues, min-heap, stacks, and linked lists</strong></p>,
      <p>Built using <strong>Java</strong></p>
    ]
  },
  {
    id: 3, 
    name: "RiscV Emulator", 
    url: "https://github.com/cs315-s24/project04-AllenHo2", 
    img: "/Emulator.jpg",
    description: [
      <u>*Credit to Professor Phil Peterson for template of emulator code*</u>,
      <p>Developed RiscV Emulator that emulated C and Assembly code that I worked on over the semester</p>,
      <p>Developed code in C that utilizes <strong>pointers</strong> to emulate registers in RiscV as well as <strong>direct-mapped & set-associative cache</strong></p>,
      <p>Built using <strong>C and Assembly</strong></p>
    ]
  },
]

const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    textDecoration: "yellow underline ",
};
export default function Projects() {
  return (
    <div className={styles.layout}>
      {projectNames.map((project) => (
        <div key={project.id} className={styles.map}>
        <Link href={project.url}>
        <Image
        src={project.img}
        alt="project cover"
        width={300}
        height={300}
        style={imageStyle}
        />
        </Link>
        <br/>
        <div className={styles.name}>
          <a href={project.url} style={titleStyle}>{project.name}</a>
        </div>
        <br/>
        <ul>
          {project.description.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        </div>
      )
        )}
    </div>
  );
}