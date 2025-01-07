import Link from "next/link"
import styles from "./navbar.module.css"

const NavBar = () => {
    return(
        <div style={{paddingBottom: 10}}>
            <nav className="navbar">
                <Link href="/" className={styles.links}>Home</Link>
                <Link href="../about" className={styles.links}>About</Link>
                <Link href="../projects" className={styles.links}>Projects</Link>
                <Link href="../experience" className={styles.links}>Experience</Link>
                <Link href="../contact" className={styles.links}>Contact</Link>
            </nav>
        </div>
    )
}

export default NavBar