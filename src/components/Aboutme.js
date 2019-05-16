import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

class About extends Component {
  state = {};
  render() {
    return (
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="004"
          dateText="02/2005 – 06/2007"
          dateInnerStyle={{ background: "#76bb7f" }}
        >
          <h3>New Country, New Life</h3>
          <h4>Haworth, NJ</h4>
          <p>
            In 2005, my entire life has changed. I was born in Seoul, Korea,
            living a completely different life, and there was not a single
            moment that I thought I was going to be living in America. But when
            I was 12, my parents decided take a leap of faith and brought our
            family to Haworth, NJ where the new chapter of my life has began.
          </p>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText="09/2007 – 06/2011"
          style={{ color: "#e86971" }}
        >
          <h3>Where I first discovered my passion for science</h3>
          <h4>Demarest High School, NJ</h4>
          <p>
            Back in High School, I have dedicated most of my time to sports.
            Fitness, football and basketball was my sole passion until I took
            this basic engineering class that my school offered in my senior
            year. Although that class was only an introduction for various
            engineering courses in college, it allowed me to find my second
            passion after sports, which made me commit to engineering major at
            Syracuse University.
          </p>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText="08/2011 – 12/2015"
          style={{ color: "#e86971" }}
        >
          <h3>Graduated!</h3>
          <h4>Syracuse University, NY</h4>
          <p>
            At first, I started out as a Civil Engineering major because one of
            my strongest subjects was physics but after my 1st year in college,
            on top of the suggestion from my college advisor, I realized I
            wanted to be more involved in the tech industry, so I have decided
            to switch my major to EE. After 4 years in Syracuse University, I
            have graduated with a BS Degree in Electrial Engineering along with
            a minor in Computer Engineering.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="11/2016 – 11/2018"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
          }}
        >
          <h3 style={{ color: "#61b8ff" }}>
            Life as a Business Development Professional
          </h3>
          <h4 style={{ color: "#61b8ff" }}>MIDASoft Inc.</h4>
          <p>
            After I graduated from college, I wanted to make sure my first job
            "perfectly" fit my traits. I wanted to take on a role where I could
            fully utilize my knowledge in engineering and my interpersonal
            skills. So back in Nov. 2016, I have joined MIDASoft Inc., which is
            a structural engineering software development company, as a software
            consultant at first. Then within a year, I was able take on a bigger
            responsibility as a Business Developer for corporate level clients.
          </p>
          <p>
            While I was working at MIDASoft, I was given with an opportunity to
            consistently work with the marketing department. Because I had
            little bit of programming experience from my Computer Engineering
            background, I was directly involved with renewing our company
            website, generating web invitations and flyers and more. And that
            was when I finally found my true professional passion. Although I
            was able to successfully perform at my current position, my passion
            toward programming start to grow inside of me slowly but steadily.
            Back in 2005, if my parents took a leap of faith for me, it was time
            for me to take another leap of faith myself and chase my dream to
            become a developer.
          </p>
          <p />
        </TimelineItem>

        <TimelineItem
          key="004"
          dateText="11/2018 – Present"
          dateInnerStyle={{ background: "#76bb7f" }}
        >
          <h3>Where I am now</h3>
          <h4>Taking a step forward each day to chase my dream</h4>
          <p>
            So in Nov. 2018, I have left my job. Before I go down this road to
            become a software developer, I wanted to do things that I am also
            passionate about, which was traveling and fitness. I traveled around
            Europe for little over two weeks and around South Korea, which is my
            homeland, for another 3 weeks. Meanwhile, I made sure to put
            exercise as my daily routine to bring my body back in shape again.
          </p>
          <p>
            And now, to chase my dreams, I have taken online courses offered by
            Emeritus and Columbia Engineering and also have been using mulitple
            online resources to boost my knowledge in JavaScript/Python/MySQL to
            become a software developer someday!
          </p>
          <p />
        </TimelineItem>
      </Timeline>
    );
  }
}

export default About;
