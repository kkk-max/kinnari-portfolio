import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import relocatePdf from "../assets/relocatePDF.pdf";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CustomPDFViewerModal = ({ isOpen, toggleModal, singleData }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <>
      <Modal
        size="lg"
        // fullscreen={true}
        show={isOpen}
        onHide={toggleModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{singleData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Example">
            <div className="Example__container">
              <div className="Example__container__document">
                <Document
                  className="pdf_modal"
                  file={relocatePdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>
            </div>
          </div>
          <div className="pdf_pagination">
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
          </div>
          <div className="pdf_pagination">
            <div className="margin_between">
              <Button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                Previous
              </Button>
            </div>
            <div>
              <Button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Next
              </Button>
            </div>
          </div>
          {/* <p>
            Page {pageNumber} of {numPages}
          </p> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomPDFViewerModal;
