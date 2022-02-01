import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Email from "./Email";
import Projects from "./Projects";
import SubHeader from "./SubHeader";
import { Tabs, Tab } from "react-bootstrap";
import Research from "./Research";
import Volunteering from "./Volunteering";
import { HiLightBulb } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Main() {
  const [key, setKey] = useState("projects");
  console.log(key);
  return (
    <>
      {/* this main file contains all the parts of screen */}
      {/* main header */}
      <Header />
      {/* sub header */}
      <SubHeader />
      {/* tabbing */}
      <section className="tab-sec">
        <Tabs
          defaultActiveKey="projects"
          activeKey={key}
          id="uncontrolled-tab-example"
          className="container"
          onSelect={(k) => setKey(k)}
        >
          <Tab
            eventKey="projects"
            title={
              <div className="tab-wrap">
                <div className="project_bulb_icon icon-shape">
                  {/* <HiLightBulb
                    color={key === "projects" ? "#2F48AF" : "black"}
                  /> */}
                  <img src={require(`../assets/images/${ key === "projects" ? "projectSelected" : "projectNew" }.png`)} height={52} />
                </div>
                <span className={key === "projects" ? "active" : "inactive"} > Projects </span>
              </div>
            }
          >
            <Projects />
          </Tab>
          <Tab
            eventKey="research"
            title={
              <div className="tab-wrap">
                <div className="project_bulb_icon icon-shape">
                  <img src={require(`../assets/images/${ key === "research" ? "researchSelected" : "researchNew" }.png`)} height={52} />
                  {/* <BsBook color={key === "research" ? "#2F48AF" : "black"} /> */}
                </div>
                <span className={key === "research" ? "active" : "inactive"} > Research </span>
              </div>
            }
          >
            <Research />
          </Tab>
          <Tab
            eventKey="volunteer"
            title={
              <div className="tab-wrap">
                <div className="project_bulb_icon icon-shape">
                  <img src={require(`../assets/images/${ key === "volunteer" ? "volunteerSelected" : "volunteer" }.png`)} height={52} />
                  {/* <FaPeopleCarry
                    color={key === "volunteer" ? "#2F48AF" : "black"}
                  /> */}
                </div>
                <span className={key === "volunteer" ? "active" : "inactive"} > Volunteering </span>
              </div>
            }
          >
            <Volunteering />
          </Tab>
          <Tab
            eventKey="email"
            title={
              <div className="tab-wrap">
                <div className="project_bulb_icon icon-shape">
                  <img src={require(`../assets/images/${ key === "email" ? "mailSelected" : "mailNew" }.png`)} height={52} />
                  {/* <FiMail color={key === "email" ? "#2F48AF" : "black"} /> */}
                </div>
                <span className={key === "email" ? "active mr-5 " : "inactive"}>
                  E-mail
                </span>
              </div>
            }
          >
            <Email />
          </Tab>
        </Tabs>
      </section>
      <div
        className={
          key === "email" || key === "volunteer" ? "sticky-footer" : ""
        }
      >
        <Footer />
      </div>
    </>
  );
}
