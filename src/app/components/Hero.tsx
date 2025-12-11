"use client"
import styles from "../page.module.css";
import Image from "next/image"
import { motion } from "framer-motion";

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
        <motion.div className={styles.image} initial={{ scale: 0.5 }} animate={{ scale: 1, rotate:360 }} transition={{ duration: 0.8}}>
              <motion.div>
                <Image
                    src="/portfolio.png"
                    alt="Portfolio Image"
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    style={imageStyle}
                    priority
                />
              </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero
