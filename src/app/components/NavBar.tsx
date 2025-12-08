import Link from "next/link"
import styles from "./navbar.module.css"
import { AnimatePresence } from "framer-motion"

const navNames = [
    {id: 1, name: "Home", link:"/"},
    {id: 2, name: "About", link:"../about"},
    {id: 3, name: "Projects", link:"../projects"},
    {id: 4, name: "Experience", link:"../experience"},
    {id: 5, name: "Contact", link:"../contact"},
]

const NavBar = () => {
    return(
        <div className={styles.container}>
            {navNames.map((navName) => (
                <nav key={navName.id} className="navbar">
                    <Link href={navName.link} className={styles.links}>{navName.name}</Link>
                </nav>
            ))}
        </div>
    )
}

export default NavBar
