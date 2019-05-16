import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import myPhotoTwo from "../img/myPhoto2.jpg";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={myPhotoTwo} alt="avatar" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Hyunseok Kahng</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Self-sustaining individual with an ability of working with little
              to no supervision. Goal-oriented and execellent team player, who
              is looking to utilize the software development capability along
              with previous business development experiences to meet clients'
              various needs and maximize the efficiency in workflow. Brings
              solid knowledge in front-end development and relational databases.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Fort Lee, New Jersey 07024</p>
            <h5>Phone</h5>
            <p>(201) 245 7837</p>
            <h5>Email</h5>
            <p>hkahng92@gmail.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <a
              href="https://drive.google.com/open?id=1MQPt8cN7fGQQxYPb99R2UyLX6F9oEBJx"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>Download Resume</Button>
            </a>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={"Aug. 2011"}
              endYear={"Dec. 2015"}
              schoolName="Syracuse University"
              schoolDescription="Bachelor of Science in Electrical Engineering, minor in Computer Engineering"
              relatedCourses="Object Oriented Design | Computer Architecture | Algorithm and Data Structures | Web System Architecture"
            />

            <Education
              startYear={"Nov. 2018"}
              endYear={"Feb. 2019"}
              schoolName="Columbia & Emeritus"
              schoolDescription="The applied Data Science Program"
              relatedCourses="Python & MySQL Fundamentals | Data mining, visualization, and management | Overview of Machine Learning"
            />

            <hr style={{ borderTOp: "3px solid #e22947" }} />

            <h2>Work Experience</h2>
            <Experience
              workStart={"Jan. 2018"}
              workEnd={"Nov. 2019"}
              companyName="MIDASoft. Inc"
              positionName="Business Development - User Client Manager"
              jobDescription="Managed the software platform and its licensing for corporate level user clients: 400+ companies and government agencies "
              jobDescriptionTwo="Developed quarterly and yearly B2B marketing strategy and sales plans"
              jobDescriptionThree="Confered with software developement team to resolve techincal issues and to improve the development process for clients' needs in North America"
            />

            <Experience
              workStart={"Nov. 2016"}
              workEnd={"Dec. 2017"}
              companyName="MIDASoft. Inc"
              positionName="CAE Consultant Engineer"
              jobDescription="Using Zoho CRM, Hubspot and internal system, organized and managed FEA software training seminars across North America"
              jobDescriptionTwo="Created solutions in the areas of software licensing management, including software distributions, product upgrades to provide the latest version and reduce clients' license traffic issues to meet each engineering sector's needs"
            />

            <Experience
              workStart={"Aug. 2016"}
              workEnd={"Nov. 2016"}
              companyName="Brooklyn Cider House & PJ Wine Inc."
              positionName="Logistics Manager"
              jobDescription="Supervised product shipments to NYC and managed product inventory. Performed basic data analysis to maintain and improve the product shipping process"
            />
            <Experience
              workStart={"Apr. 2016"}
              workEnd={"Jul. 2016"}
              companyName="Veritas-learning"
              positionName="Techincal Support / TA"
              jobDescription="Diagnosed and debugged hardware and software issues. Optimized product department's database structure"
            />

            <hr style={{ borderTOp: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="JavaScript" progress="60" />
            <Skills skill="React" progress="30" />
            <Skills skill="Python" progress="55" />
            <Skills skill="MySQL" progress="50" />
            <Skills skill="HTML/CSS" progress="10" />

            <hr style={{ borderTOp: "3px solid #e22947" }} />

            <h2>Industry knowledge</h2>
            <ul>
              <li>Business Development</li>
              <li>CAE Consulting</li>
              <li>
                Technical Support (midas Civil - Finite Element Analysis
                Software)
              </li>
              <li>Marketing Strategy (B2B)</li>
              <li>Social Media Marketing</li>
            </ul>

            <hr style={{ borderTOp: "3px solid #e22947" }} />

            <h2>Languages</h2>
            <ul>
              <li>English (Fluent) | Korean (Fluent) | Chinese (Elementary)</li>
            </ul>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
