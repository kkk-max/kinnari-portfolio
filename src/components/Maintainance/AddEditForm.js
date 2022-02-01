import React, { useState } from "react";
import { Formik } from "formik";
import { displayFormErrors, projectValidation } from "../../utils/validation";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditProject } from "../../redux/actions/editProject";
import { fetchAddProject } from "../../redux/actions/addProject";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function AddEditForm({ isEdit, data }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [editData, setEditData] = useState(history?.location?.state);
  console.log("editData", editData);
  const {
    listingProjectData = null,
    addProjectLoading = false,
    editProjectLoading = false,
  } = useSelector((state) => ({
    listingProjectData: state.listingData?.data,
    addProjectLoading: state.addData?.isLoading,
    editProjectLoading: state.editData?.isLoading,
  }));

  const handleFileUpload = (event, setFieldValue) => {
    let selectedFile = event.target.files;
    let file = null;
    let fileName = "";
    //Check File is not Empty
    if (selectedFile.length > 0) {
      // Select the very first file from list
      let fileToLoad = selectedFile[0];
      fileName = fileToLoad.name;
      // FileReader function for read the file.
      let fileReader = new FileReader();
      // Onload of file read the file content
      fileReader.onload = function (fileLoadedEvent) {
        file = fileLoadedEvent.target.result;
        // Print data in console
        // setPdf({
        //   fileData: file,
        //   fileName: fileName,
        // });
        setFieldValue("projectUrl", file);
        console.log("file", file);
      };
      // Convert data to base64
      fileReader.readAsDataURL(fileToLoad);
    }
  };

  const initValues = {
    title: editData?.title ? editData?.title : "",
    description: editData?.description ? editData?.description : "",
    moreDescription: editData?.moreDescription ? editData?.moreDescription : "",
    team: editData?.team ? editData?.team : "",
    tools: editData?.tools ? editData?.tools : "",
    duration: editData?.duration ? editData?.duration : "",
    projectUrl: editData?.projectUrl ? editData?.projectUrl : "",
  };

  const submitForm = (values) => {
    console.log(values);
    let passData = {
      title: values?.title,
      description: values?.description,
      moreDescription: values?.moreDescription,
      team: values?.team,
      tools: values?.tools,
      duration: values?.duration,
    };

    if (editData) {
      if (values?.projectUrl !== "") {
        passData = { ...passData, projectUrl: values?.projectUrl };
      }
      passData = { ...passData, id: editData?.id };
      console.log("final passData", passData);
      dispatch(fetchEditProject(passData)).then(() => {
        history.push("/listing-project");
      });
    } else {
      passData = { ...passData, projectUrl: values?.projectUrl };
      dispatch(fetchAddProject(passData)).then(() => {
        history.push("/listing-project");
      });
    }
  };

  return (
    <>
      <Header />
      <div className="sub-header">
        <div className="container d-flex">
          <div className="float-right mr-5">
            <Link to="/">
              <Button>
                <div>Homepage</div>
              </Button>
            </Link>
          </div>
          <div className="float-right ml-4">
            <Link to="/listing-project">
              <Button>Project List</Button>
            </Link>
          </div>
        </div>
      </div>
      <section className="tab-sec">
        <div className="container">
          <Card>
            <Card.Header>
              {editData ? "Edit Project" : "Add New Project"}
            </Card.Header>
            <Formik
              enableReinitialize
              initialValues={initValues}
              validationSchema={projectValidation}
              onSubmit={submitForm}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                submitCount,
                setFieldValue,
              }) => {
                const showError = (key) =>
                  displayFormErrors(key, errors, touched, submitCount);
                return (
                  <>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Project Title</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter project title"
                              name="title"
                              onChange={handleChange}
                              value={values.title}
                            />
                            <Form.Text className="text-muted">
                              {showError("title")}
                            </Form.Text>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Project PDF</Form.Label>
                            <Form.Control
                              type="file"
                              name="projectUrl"
                              accept="application/msword, application/pdf, application/vnd.ms-powerpoint,                             application/pdf, "
                              onChange={(e) => {
                                handleFileUpload(e, setFieldValue);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                              as={"textarea"}
                              placeholder="Enter project title"
                              name="description"
                              onChange={handleChange}
                              value={values.description}
                              placeholder="Description"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Read More description</Form.Label>
                            <Form.Control
                              as="textarea"
                              name="moreDescription"
                              value={values.moreDescription}
                              onChange={handleChange}
                              placeholder="read more... description"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Team</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Team"
                              name="team"
                              onChange={handleChange}
                              value={values.team}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Tools & Technology</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Tools & Tech.."
                              name="tools"
                              onChange={handleChange}
                              value={values.tools}
                            />
                          </Form.Group>
                        </Col>{" "}
                        <Col md={4}>
                          <Form.Group
                            className="mb-3 mt-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Duration</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Duration"
                              name="duration"
                              onChange={handleChange}
                              value={values.duration}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={addProjectLoading || editProjectLoading}
                      >
                        Submit
                      </Button>
                    </Form>
                  </>
                );
              }}
            </Formik>
          </Card>
        </div>
      </section>
    </>
  );
}
