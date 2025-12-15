"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./contact.module.css"
import {imageStyle} from "../style.js"
import { motion } from "framer-motion";
import Animation from "../components/Animation";

const contacts = [
  {id: 1, name: "Github", url: "https://github.com/AllenHo2", img: "/GithubLogo.png"},
  {id: 2, name: "Linkedin", url: "https://www.linkedin.com/in/allen-ho-b67a6725b/", img: "/LinkedinLogo.png"},
  {id: 3, name: "Email", url: "mailto:allenho2242004@gmail.com", img: "/EmailLogo.jpg"}
]

export default function Contact() {
  return (
    <Animation>
      <div className={styles.layout}>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <Link href={contact.url}>
            <div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8}}>
              <Image
              src={contact.img}
              alt={contact.name}
              width={300}
              height={300}
              style={imageStyle}
              priority
              />
            </motion.div>
            </div>
            </Link>
            <div className={styles.name}>
              {contact.name}
            </div>
          </div>
        ))}
      </div>
    </Animation>
  );
}
