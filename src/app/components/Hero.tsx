import styles from "../page.module.css";
import Image from "next/image"

const imageStyle = {
    borderRadius: "50%",
    border: "5px double var(--foreground)",
}

const Hero = () => {
    return(
        <div className={styles.page}>
            <div className={styles.text}>
                <h1>Allen Ho</h1>
                <p>Software Engineer, Computer Science B.S. @ University of San Francisco</p>
            </div>
            <div className={styles.image}>
                <Image
                    src="/portfolio.png"
                    alt="Portfolio Image"
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    style={imageStyle}
                    priority
                />
            </div>
        </div>
    )
}

export default Hero 