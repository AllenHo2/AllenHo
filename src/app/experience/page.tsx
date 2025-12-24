import Link from "next/link"
import styles from "../page.module.css"
import Animation from "../components/Animation"

const textStyle = {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 100
}

export default function Experience() {
  return (
    <Animation>
      <div style={textStyle} className={styles.text}>
        <h1>Education</h1>
        <hr />
        <br />
        <h2>University of San Francisco <span style={{ marginLeft: 305 }}></span>  B.S. in Computer Science with Concentration in A.I.</h2>
        <h2><span style={{ marginLeft: 636 }}></span> Graduated : December 2025</h2>
        <br />
        <h2>Sogang University <span style={{ marginLeft: 418 }}></span>  Study Abroad: December 2024</h2>
        <br/>
        <br/>
        <p><strong>Relevant Skills: </strong> Typescript, Next.js, C, D3.js, React.js, Java, Git, P5, C++, Python, Vanilla Javascript, HTML, CSS, Terminal, Excel</p>
        <br/>
        <p><strong>Technology: </strong> Docker, Linear, Prisma, PostgresSQL Databases, Convex, WorkOS</p>
        <br/>
        <p><strong>Languages: </strong>Cantonese, English, Korean, Japanese, French</p>
        <br/>
        <br/>
        <br/>
        <h1>Work Experience</h1>
        <hr />
        <br />
        <ul>
          {/*TODO: Add work experience at Bushido*/}
          <li><strong>Full-Stack Software Engineer Intern</strong><span style={{ marginLeft: 615 }}></span>Bushido <span style={{ marginLeft: 100 }}></span> April 2025 -- Present</li>
          <br />
          <ul>
            <li>Implemented end-to-end feature development by designing new database schema fields with Prisma, updating backend APIs via tRPC, and integrating data into dynamic React components, improving application functionality and user experience.</li>
            <li>Enhanced data accessibility and frontend performance by deploying a new feature pipeline that securely retrieved and displayed data from a PostgreSQL database to the client interface.</li>
          </ul>
          <br />
          <li><strong>Account Receivable Supervisor</strong><span style={{ marginLeft: 495 }}></span>San Francisco Fire Protection <span style={{ marginLeft: 100 }}></span> May 2024 -- August 2024</li>
          <br />
          <ul>
            <li>Led a team to streamline and optimize accounts receivable processes, ensuring timely and accurate billing using Excel.</li>
          </ul>
          <br />
          <li><strong>Mentor</strong><span style={{ marginLeft: 650 }}></span>Provide Advocacy and Care for All <span style={{ marginLeft: 100 }}></span> May 2021 -- August 2021</li>
          <br />
          <ul>
            <li>Managed projects for incoming advocates</li>
            <li>Created presentations with other mentors about advocacy, leadership, and outreach</li>
            <li>Provided feedback to advocates to allow them to reach a wider community, suitable niche, and connections with companies or organizations that could support their endeavors</li>
          </ul>
          <br />
          <li><strong>Web Developing Intern</strong><span style={{ marginLeft: 650 }}></span>Code Tenderloin <span style={{ marginLeft: 100 }}></span> July 2021 -- August 2021</li>
          <br />
          <ul>
            <li>Created website with Vanilla JavaScript, HTML, CSS that was a small encyclopedia of a few animals</li>
            <li>Built, styled, and deploy my website for other interns and the public to evaluate</li>
          </ul>
        </ul>
        <br />
        <h1><Link href="../projects" style={{ color: "lightBlue" }}>Projects</Link></h1>
        <hr />
        <br />
        <i>Click header to redirect to Projects</i>
        <br />
        <br />
        <h1>Relevant Coursework</h1>
        <hr />
        <br />
        <p>
          Data Structure and Algorithms, Introduction to A.I., Natural Language Processing, Introduction to Recommender Systems, Management Science, Computer Architecture, C and Systems Programming, Data Visualization, Management Science,
          Discrete Mathematics, Linear Algebra & Probability, Introduction to Unix Linux, Statistics
        </p>
        <br />
        <br />
        <h1>Activities</h1>
        <hr />
        <br />
        <ul>
          <li>
            <strong>Hack4Impact</strong> &nbsp; 2024-2025
            <ul>
              <li>
                Vice President for a non-profit organization called Hack4Impact (starting activities Spring of 2025)
              </li>
            </ul>
          </li>
          <li>
            <strong>Compsigh</strong> &nbsp; 2022-2025
            <ul>
              <li>
                Member of the largest Computer Science Club at USF
              </li>
              <li>
                Participated in Hackathons and workshops as part of the club
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Animation>
  );
}
