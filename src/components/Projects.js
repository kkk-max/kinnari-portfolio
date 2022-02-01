import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import sample from "../assets/images/sample.png";
import { FiLink } from "react-icons/fi";
import LoadingOverlay from "react-loading-overlay";
// import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { data, pdfString } from "../data/dummyData";
import relocatePdf from "../assets/relocatePDF.pdf";
import { BsEye } from "react-icons/bs";
import { decode } from "base64-arraybuffer";
import { useDispatch, useSelector } from "react-redux";
import { fetchListingPorject } from "../redux/actions/listingProjects";

export default function Projects() {
  const [readMore, setReadMore] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [hoverStyle, setStyle] = useState({ display: "none" });
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [readMoreIndex, setReadMoreIndex] = useState(-1);
  const [isOpenPdfViwerModal, setPdfViewerModal] = useState(false);
  const [singleData, setSingleData] = useState(false);
  const dispatch = useDispatch();

  const togglePdfViewerModal = (d = {}) => {
    setSingleData(d);
    setPdfViewerModal(!isOpenPdfViwerModal);
  };

  const { listingProjectData = null, listingDataLoading = false } = useSelector(
    (state) => ({
      listingProjectData: state.listingData?.data,
      listingDataLoading: state.listingData?.isLoading,
    })
  );

  useEffect(() => {
    dispatch(fetchListingPorject());
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  function base64toPDF(data) {
    var bufferArray = decode(data); //base64ToArrayBuffer(data);
    var blobStore = new Blob([bufferArray], { type: "application/pdf" });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blobStore);
      return;
    }
    return (data = window.URL.createObjectURL(blobStore));
    // var link = document.createElement("a");
    // document.body.appendChild(link);
    // link.href = data;
    // link.download = "file.pdf";
    // link.click();
    // window.URL.revokeObjectURL(data);
    // console.log(link);
    // link.remove();
  }

  function base64ToArrayBuffer(data) {
    var bString = window.atob(data);
    var bLength = bString.length;
    var bytes = new Uint8Array(bLength);
    for (var i = 0; i < bLength; i++) {
      var ascii = bString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  // let decodedBase64 = base64.base64Decode(pdfString, 'PdfFileNameToWrite');

  return (
    <>
      <LoadingOverlay
        active={listingDataLoading}
        spinner
        text="Loading content"
      >
        {listingProjectData?.map((d, i) => {
          return (
            <React.Fragment key={`${i}${d?.title}`}>
              <section
                key={i}
                className={`tab-content-wrap projectWrap tab-content${
                  i > 0 && "2"
                }`}
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
                          <h4 className="poppins-medium">{d?.title || ""}</h4>
                          <div
                            className="project_card_link_icon"
                            onClick={() => {
                              openInNewTab(d?.projectUrl);
                            }}
                          >
                            {" "}
                            <FiLink color="white" size={18} />
                          </div>
                          {/* <div>
                          <img src={require("../assets/images/linkNew.png")} height={40} />
                        </div> */}
                        </div>
                        <div
                          className="card-img hover_container"
                          onClick={() => {                            
                            openInNewTab(base64toPDF(d?.projectUrl));
                          }}
                        >
                          {/* <FiLink color="white" style={hoverStyle} /> */}
                          <img src={sample} />
                          <div class="overlay">
                            <div class="eye_icon">
                              <BsEye color="fff" size={60} />
                            </div>
                            <div class="text">View Process</div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content-right">
                        <div className="tags-buttons-group">
                          {/* {d?.tags?.map((tags, index) => {
                            return (
                              <React.Fragment key={index}>
                                <Button className="tags-btn">
                                  <span className="poppins-semiBold">
                                    {tags}
                                  </span>
                                </Button>
                              </React.Fragment>
                            );
                          })} */}
                          <Button className="tags-btn">
                            <span className="poppins-semiBold">Branding</span>
                          </Button>
                          <Button className="tags-btn">
                            <span className="poppins-semiBold">UX Writing</span>
                          </Button>
                          <Button className="tags-btn">
                            <span className="poppins-semiBold">
                              Service Design
                            </span>
                          </Button>
                        </div>
                        <div className="card-txt-area">
                          <Card.Text className="card-text">
                            {d?.description}
                            {readMore &&
                              readMoreIndex === i &&
                              d?.moreDescription}
                            <a
                              className="moreBtn"
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
      </LoadingOverlay>

      {/* {isOpenPdfViwerModal && (
        <CustomPDFViewerModal
          isOpen={isOpenPdfViwerModal}
          toggleModal={togglePdfViewerModal}
          singleData={singleData}
        />
      )} */}
    </>
  );
}
