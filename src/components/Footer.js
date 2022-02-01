import React from "react";
import { BsDot, BsFillFlagFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-brand">Kinnari Gatare</div>
          <div>
            <div className="language">
              <a>
                <img
                  className="lan-img"
                  src={require("../assets/images/webNew.png")}
                  height={25}
                  // width={100}
                />
              </a>
              <a style={{ color: "#40307A", fontFamily:'Poppins-Regular' }}>English</a>
              <span className="mr-5 ml-5">
                <img
                  src={require("../assets/images/starNew.png")}
                  height={8}
                  width={8}
                />
              </span>
              <a className="language_txt">Hindi</a>
              <span className="mr-5 ml-5">
                <img
                  src={require("../assets/images/starNew.png")}
                  height={8}
                  width={8}
                />
              </span>
              <a className="language_txt">Marathi</a>
              <span className="mr-5 ml-5">
                <img
                  src={require("../assets/images/starNew.png")}
                  height={8}
                  width={8}
                />
              </span>
              <a className="language_txt">Spanish</a>
              <span className="mr-5 ml-5">
                <img
                  src={require("../assets/images/starNew.png")}
                  height={8}
                  width={8}
                />
              </span>
              <a className="language_txt">ASL</a>
            </div>
          </div>
          {/* <div>
            <a>
              <img
                src={require("../assets/images/starNew.png")}
                height={8}
                width={8}
              />
            </a>
            <a>
              <img
                src={require("../assets/images/starNew.png")}
                height={8}
                width={8}
              />
            </a>
            <a>
              <img
                src={require("../assets/images/starNew.png")}
                height={8}
                width={8}
              />
            </a>
            <a>
              <img
                src={require("../assets/images/starNew.png")}
                height={8}
                width={8}
              />
            </a>
            <a>
              <img
                src={require("../assets/images/starNew.png")}
                height={8}
                width={8}
              />
            </a>
          </div> */}
          <div>
            {/* <BsFillFlagFill /> */}
            <img
              className="flag"
              src={require("../assets/images/flag.png")}
              alt="icon"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
