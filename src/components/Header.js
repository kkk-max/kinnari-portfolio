import React, { useState } from "react";
import {
  FaBehance,
  FaInstagram,
  FaLinkedinIn,
  FaRegClosedCaptioning,
  FaRegEnvelope,
} from "react-icons/fa";
import insta from "../assets/images/insta.png";

const instagramURL = "https://www.instagram.com/glitteroholic_poetry/";
const linkedURL = "https://www.linkedin.com/in/kinnarigatare";
const behanceURL = "https://www.behance.net/";
const emailURL = "mailto:kinnarisg1409@gmail.com";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export default function Header() {
  const [filepdf, setPdf] = useState("");
  const handleUploadFile = (event) => {
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
        console.log(file);
      };
      // Convert data to base64
      fileReader.readAsDataURL(fileToLoad);
    }

    // this.setState({
    //   fileData: file,
    //   fileName: fileName,
    // });
    setPdf({
      fileData: file,
      fileName: fileName,
    });
  };

  return (
    <>
      {/* <input
        type={"file"}
        onChange={(e) => {
          console.log(e);
          handleUploadFile(e)
        }}
      /> */}
      <div>
        <nav className="app_light_blue navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a
              className="navbar-brand"
              onClick={() => {
                openInNewTab(emailURL);
              }}
            >
              <img
                src={require("../assets/images/mailIcon.png")}
                height={13}
                style={{ marginRight: "5px", marginTop: "2px" }}
              />
              <span className="nav-email">kinnarisg1409[at]gmail[dot]com</span>
            </a>
            <div className="d-flex bd-highlight">
              <a
                className="p-2 flex-fill bd-highlight social_icon"
                // to={linkedURL}
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={() => {
                  openInNewTab(linkedURL);
                }}
              >
                <img
                  src={require("../assets/images/linkedInNew.png")}
                  height={13}
                  width={13}
                />
                {/* <FaLinkedinIn color="black" /> */}
              </a>
              <a
                className="p-2 flex-fill bd-highlight social_icon"
                onClick={() => {
                  openInNewTab(instagramURL);
                }}
              >
                <img
                  src={require("../assets/images/instaNew.png")}
                  height={13}
                  width={13}
                  style={{ marginTop: "3px" }}
                />
                {/* <img src={insta} height={20} width={20}/> */}
                {/* <FaInstagram color="black" /> */}
              </a>
              <a
                className="p-2 flex-fill bd-highlight social_icon"
                onClick={() => {
                  // openInNewTab(behanceURL);
                }}
                disabled={true}
              >
                <img
                  src={require("../assets/images/behanceIcon.png")}
                  height={13}
                  width={15}
                  style={{ marginTop: "3px" }}
                />
              </a>
              <a
                className="p-2 flex-fill bd-highlight social_icon"
                onClick={() => {
                  openInNewTab(behanceURL);
                }}
              >
                <img
                  src={require("../assets/images/cvNewIcon.png")}
                  height={13}
                  width={13}
                  style={{ marginTop: "3px" }}
                />
                {/* <FaBehance /> */}
              </a>
              {/* <a
                className="p-2 flex-fill bd-highlight social_icon"
                onClick={() => {
                  openInNewTab(behanceURL);
                }}
              >
                <FaBehance />
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
