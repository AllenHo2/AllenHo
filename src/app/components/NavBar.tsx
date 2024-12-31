import Link from "next/link"

const NavBar = () => {
    return(
        <div style={{paddingBottom: 10}}>
            <nav className="navbar">
                <Link href="/">Home</Link>
                <Link href="../about">About</Link>
                <Link href="../projects">Projects</Link>
                <a href="../contact">Contact</a>
            </nav>
        </div>
    )
}

export default NavBar