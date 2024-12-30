import styles from "./projects.module.css"
import Image from "next/image"

const projectNames = [
  {id: 1, name: "Envrionmental Impacts in the 21st Centrury", url: "https://allenho2.github.io/Environmental-Impacts-in-the-21st-Century/", img: "/DataViz.jpg"},
  {id: 2, name: "Project 2", url: "https://github.com/AllenHo2/project02-Elevator", img: "/ScatterPlot.png"},
  {id: 3, name: "", url: "", img: "/ScatterPlot.png"}
]

export default function Projects() {
  return (
    <div className={styles.layout}>
      {projectNames.map((project) => (
        <div key={project.id} className={styles.map}>
        <Image
        src={project.img}
        alt="project cover"
        width={300}
        height={300}
        />
        <br/>
        <a href={project.url}>{project.name}</a>
        </div>
      )
        )}
    </div>
  );
}