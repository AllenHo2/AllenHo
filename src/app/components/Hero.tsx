import styles from "../page.module.css";
import Image from "next/image"

const Hero = () => {
    return(

        <div className={styles.page}>
            <div className={styles.text}>
                <h1>Allen Ho</h1>
                <p>Hello! My name is Allen Ho and I am a software engineer based in San Francisco</p>
            </div>
            <div className={styles.image}>
                <Image
                    src="/Portfolio.png"
                    alt="Portfolio Image"
                    layout="fill" 
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
        </div>
    )
}

export default Hero 