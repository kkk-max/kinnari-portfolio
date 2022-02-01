import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FiMail } from "react-icons/fi";

export default function Email() {
  return (
    <>
      <React.Fragment>
        <section className={`blank-space`}>
          <div className="container">
            <Card>
              <Card.Body>
                <div className="tab-content-left ">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <img
                        src={require("../assets/images/mailIcon.png")}
                        height={13}
                        style={{ marginRight: "8px", marginLeft:'18px' }}
                      />
                      {/* <FiMail style={{ marginRight: "8px" }} /> */}
                      <span className="volunteer-txt">
                        kinnarisg1409[at]gmail[dot]com
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card.Body>
            </Card>
          </div>
        </section>
      </React.Fragment>
    </>
  );
}
