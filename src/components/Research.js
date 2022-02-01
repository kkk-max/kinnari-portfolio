import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import sample from "../assets/images/sample.png";
import { FiLink } from "react-icons/fi";
import data from "../data/researchDummy";
import { BsEye } from "react-icons/bs";

export default function Research() {
  const [readMore, setReadMore] = useState(false);
  const [readMoreIndex, setReadMoreIndex] = useState(-1);
  const [hoverStyle, setStyle] = useState({ display: "none" });
  const [hoverIndex, setHoverIndex] = useState(-1);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      {data?.map((d, i) => {
        return (
          <React.Fragment key={`${i}${d?.title}`}>
            <section
              key={i}
              className={`tab-content-wrap projectWrap tab-content${i > 0 && "2"}`}
            >
              <div className="container">
                <Card
                  onMouseEnter={(e) => {
                    setStyle({ display: "block" });
                    setHoverIndex(i);
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                    setHoverIndex(-1);
                  }}
                >
                  <Card.Body
                  // style={{
                  //   backgroundColor: hoverStyle.display === "block" && "#F0F0F0",
                  // }}
                  >
                    <div className="tab-content-left ">
                      <div className="tab-content-title">
                        <h6>{d?.title || ""}</h6>
                        <div
                          className="project_card_link_icon"
                          onClick={() => {
                            openInNewTab(d?.projectUrl);
                          }}
                        >
                          {" "}
                          <FiLink color="white" />
                        </div>
                      </div>
                      <div
                        className="card-img hover_container"
                        onClick={() => {
                          openInNewTab(require("../assets/relocatePDF.pdf"));
                        }}
                      >
                        {/* <FiLink color="white" style={hoverStyle} /> */}
                        <img src={sample} />
                        <div class="overlay">
                          <div class="eye_icon">
                            <BsEye color="black" size={60} />
                          </div>
                          <div class="text">View Process</div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content-right">
                      <div className="tags-buttons-group">
                        {d?.tags?.map((tags, index) => {
                          return (
                            <React.Fragment key={index}>
                              <Button className="tags-btn">{tags}</Button>
                            </React.Fragment>
                          );
                        })}
                      </div>
                      <div className="card-txt-area">
                        <Card.Text className="card-text">
                          {d?.description}
                          {readMore &&
                            readMoreIndex === i &&
                            d?.moreDescription}
                          <a
                            onClick={() => {
                              setReadMore((readMore) => !readMore);
                              setReadMoreIndex(readMore ? -1 : i);
                            }}
                          >
                            {readMore && readMoreIndex === i
                              ? "    ...less"
                              : "    ...more"}
                          </a>
                        </Card.Text>
                        <div className="team">
                          <b>
                            {" "}
                            Team<br></br>
                            Tools & Technology <br></br>
                            Duration of Project
                          </b>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </section>
          </React.Fragment>
        );
      })}
    </>
  );
}
