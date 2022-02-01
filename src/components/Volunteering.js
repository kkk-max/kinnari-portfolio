import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function Volunteering() {
  return (
    <>
      <React.Fragment>
        <section className={`blank-space VolunteeringWrap`}>
          <div className="container">
            <Card>
              <Card.Body>
                <div className="tab-content-left ">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span className="volunteer-txt">
                        Gender Cell-IIT Bombay
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="volunteer-txt">
                        Volunteering for the Gender Cell-IIT Bombay
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="volunteer-txt">Vestibulum at eros</span>
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
