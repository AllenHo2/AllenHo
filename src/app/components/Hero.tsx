import styles from "../page.module.css";
import Image from "next/image"

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
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}

export default Hero 