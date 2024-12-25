import NavBar from "../components/NavBar"
import styles from "../page.module.css"

export default function About() {
  return (
    <div>
      <div className={styles.about}>
        <p >
            Born and raised in the heart of San Francisco, Allen Ho is currently 
            pursuing a Bachelors of Science in Computer Science at the University of San Francisco.
            Some of his hobbies include outdoor walks, crocheting, and working out.

        </p>
      </div>
    </div>
  );
}