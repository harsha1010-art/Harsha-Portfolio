import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/amzn.png";
import projImg3 from "../assets/img/wethr.jpg";
import projImg4 from "../assets/img/Meal.png";
import projImg5 from "../assets/img/Water.png";
import projImg6 from "../assets/img/slsfrc.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Cryptocurrency Tracker",
      description: "Web App to track the live data like Price, Volume, Change etc. for several Cryptocurrencies. ",
      imgUrl: projImg1,
    },
    {
      title: "Amazon Prize Tracking(Python) ",
      description: "developed a small software using python to track a specific item on Amazon to mail if the price of an item is decreased",
      imgUrl: projImg2,
    },
    {
      title: "weather application",
      description: "A website that shows the capital and the languages spoken in each country as well as the current weather conditions",
      imgUrl: projImg3,
    },
    {
      title: "Online Meal Ui",
      description: "A website UI that accepts bulk food ordering and catering. ",
      imgUrl: projImg4,
    },
    {
      title: "Drinking Water App",
      description: "An interactive and multifunctional water-drinking application using stacks like HTML/CSS and JavaScript This is a handy tool for people who want to make sure they're drinking enough water every day, and it's also fun to use",
      imgUrl: projImg5,
    },
    {
      title: "Bank loan approval(Salesforce - Admin)",
      description: "In this approval-based mini-project, a bank employee sends a record to the manager if the customer's salary exceeds the minimum threshold.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
