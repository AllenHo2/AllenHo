import styles from "../page.module.css"
import Image from "next/image"

const parentStyle = {
  display: "flex",
  padding: 24
}

const imageStyle = {
  borderRadius: 90,
  border: "5px double var(--foreground)",
  marginLeft: "auto",
  marginRight: "auto",
  objectPosition: "center",
  width: "25%",
  height: "25%"
}

export default function About() {
  return (
    <div>
      <div className={styles.about}>
        <p >
            Hello! My name is Allen Ho. I was born and raised in the heart of San Francisco, currently also 
            pursuing a Bachelors of Science in Computer Science at the University of San Francisco.
            Excited by the new opportunities and vast fields that computer science allows to explore, I 
            am explore different genres that coding would allow me to explore. Of the many interests and different styles that I&apos;ve worked with in the past,
            some of my favorite topics includes cybersecurity and web development. Of the two, I&apos;m mainly focused on web development since I think that creating websites
            allows me to show off the inner workings and designs of systems that I daydream about all the time. Some core impacts that I&apos;d like to focus on with my projects would
            be something related to healthcare, animal conservation, and climate change, since I care very deeply about our environment. I&apos;ve also dabbled into learning more about streamlining 
            business managements and working with linear models. 
        </p>
        <div style={parentStyle}>
            <Image
              src="/Sogang_Pose.jpg"
              alt="Sogang Pose.jpg"
              width={700}
              height={1000}
              style={imageStyle}
            />
        </div>
        <p>
            As someone who is also interested in international businesses and cultures, I decided to study abroad at Sogang University in South Korea during the Fall of 2024. From this 
            experience, I got to meet tons of amazing people from different backgrounds that I built strong connections with. One of the most memorable moments of my time at Sogang was 
            getting to meet and connect with a lot of French people since my roommate was French. Through them, I not only got to practice my Korean while I was studying in Korea, but also
            picked up a few French phrases which I intend to study more on.  
            <br/>
            <br/>
            Besides programming, some of my hobbies include outdoor walks, crocheting, and learning new languages. During my time in Korea, I realized that I really like to explore different
            places and cafes during the day while taking late night walks. I also love to crochet and use my creativity to make gifts for the people I love. To top it all off, I love learning 
            new languages as I think it connects me more to people from different communities and different cultures. It&apos;s also a useful ability that I think would help with my further studies 
            and ventures when I have to communicate with people around the world.

        </p>
      </div>
    </div>
  );
}