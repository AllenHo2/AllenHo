import styles from "./projects.module.css"
import Image from "next/image"
import Link from "next/link"

const projectNames = [
  {id: 1, name: "Envrionmental Impacts in the 21st Centrury", url: "https://allenho2.github.io/Environmental-Impacts-in-the-21st-Century/", img: "/DataViz.jpg"},
  {id: 2, name: "Elevator Simulator", url: "https://github.com/AllenHo2/project02-Elevator", img: "/ElevatorCartoon.jpg"},
]

const imageStyle = {
  borderRadius: 90,
  border: "5px double #00FF00",
}

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
        <div style={{textAlign: "center"}}>
        <a href={project.url} style={{alignContent: "center"}}>{project.name}</a>
        </div>
        </div>
      )
        )}
    </div>
  );
}