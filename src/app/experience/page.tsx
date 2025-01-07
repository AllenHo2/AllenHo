import Link from "next/link"

const textStyle = {
    paddingLeft: 100,
    paddingRight: 100
}

export default function Experience() {
    return(
        <div style={textStyle}>
            <h1>Education</h1>
            <hr/>
            <br/>
            <h2>University of San Francisco <span style={{marginLeft: 500}}></span>  Bachelors of Science in Computer Science</h2>
            <h2>Sogang University <span style={{marginLeft: 605}}></span>  Expected Graduation: December 2025</h2>
            <br/>
            <p><strong>Relevant Skills: </strong> C, D3, Java, Git, P5, C++, React.js, Python, Typescript, Vanilla Javascript, HTML, CSS, Terminal, Excel</p>
            <p><strong>Languages: </strong>Cantonese, English, Korean, Japanese</p>
            <br/>
            <h1>Work Experience</h1>
            <hr/>
            <br/>
            <ul>
                <li><strong>Web Developing Intern</strong><span style={{marginLeft: 650}}></span>Code Tenderloin <span style={{marginLeft: 100}}></span> July 2021 -- August 2021</li>
                <br/>
                <ul>
                    <li>Created website with Vanilla JavaScript, HTML, CSS that was a small encyclopedia of a few animals</li>
                    <li>Built, styled, and deploy my website for other interns and the public to evaluate</li>
                </ul>
                <br/>
                <li><strong>Mentor</strong><span style={{marginLeft: 650}}></span>Provide Advocacy and Care for All <span style={{marginLeft: 100}}></span> May 2021 -- August 2021</li>
                <br/>
                <ul>
                    <li>Managed projects for incoming advocates</li>
                    <li>Created presentations with other mentors about advocacy, leadership, and outreach</li>
                    <li>Provided feedback to advocates to allow them to reach a wider community, suitable niche, and connections with companies or organizations that could support their endeavors</li>
                </ul>
                <br/>
                <li><strong>Account Receivable Supervisor</strong><span style={{marginLeft: 495}}></span>San Francisco Fire Protection <span style={{marginLeft: 100}}></span> May 2024 -- August 2024</li>
                <br/>
                <ul>
                    <li>Led a team to streamline and optimize accounts receivable processes, ensuring timely and accurate billing using Excel.</li>
                </ul>
            </ul>
            <br/>
            <h1><Link href="../projects" style={{color: "lightBlue"}}>Projects</Link></h1>
            <hr/>
            <br/>
            <i>Click header to go to Projects page</i>
            <br/>
            <br/>
            <h1>Relevant Coursework</h1>
            <hr/>
            <br/>
            Data Structure and Algorithms, Introduction to Recommender Systems, Management Science, Computer Architecture, C and Systems Programming, Data Visualization, Management Science, 
             Discrete Mathematics, Linear Algebra & Probability, Introduction to Unix Linux, Statistics
            <br/>
            <br/>
            <h1>Activities</h1>
            <hr/>
            <br/>
            <ul>
                <li>
                    <strong>Hack4Impact</strong> &nbsp; 2024-Present
                    <ul>
                        <li>
                            Vice President for a non-profit organization called Hack4Impact (starting activities Spring of 2025)
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Compsigh</strong> &nbsp; 2022-Present
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
    )
}