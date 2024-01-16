import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar , faPlus , faMinus } from "@fortawesome/free-solid-svg-icons";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBtn,
  } from "mdb-react-ui-kit";

const Popup = (props) => {
    return (
        <div>
             <Modal {...props} size='fullscreen-xl-down' aria-labelledby="contained-modal-title-vcenter" className='modal-sm modal-lg modal-xl'>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Card List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
            props.plist.map((val)=>{
                if(val.addtocard > 0){
                    return(
                        <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol  sm="16" md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src={val.img}
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{val.Name}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                    <span><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'green'}}/><FontAwesomeIcon icon={faStar} style={{color : 'gray'}}/></span>
                    </div>
                    <span>310</span>
                  </div>
                  {/* <div className="mt-1 mb-0 text-muted small">
                    <span>Best Quality</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div> */}
                  <div className="mb-2 text-muted small">
                    <h2>Order Price</h2>
                  <h6>Rs .{val.From * val.orderedQ}</h6>
                  <h3>Kilogram</h3>
                   <h6>{val.Q * val.orderedQ}KG</h6>
                  </div>
                  {/* <p className="text-truncate mb-4 mb-md-0">
                   
                  </p> */}
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">₹ {val.From}</h4>
                    <span className="text-danger">
                      <s>₹ {val.dis}</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
</MDBContainer>
    )
        }
    })
    }

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Popup;
