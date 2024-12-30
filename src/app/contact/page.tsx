import Link from "next/link";
import Image from "next/image";
import styles from "./contact.module.css"

const contacts = [
  {id: 1, name: "Github", url: "https://github.com/AllenHo2", img: "/GithubLogo.png"},
  {id: 2, name: "Linkedin", url: "https://www.linkedin.com/in/allen-ho-b67a6725b/", img: "/LinkedinLogo.png"}
]

export default function Contact() {
  return (
    <div className={styles.layout}>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.map}>
          <Link href={contact.url}>
          <Image
          src={contact.img}
          alt={contact.name}
          width={300}
          height={300}
          />
          </Link>
        </div>
      ))}
    </div>
  );
}