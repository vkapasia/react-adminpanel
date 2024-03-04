import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import '../App.css';
import Sidebarnew from '../component/Sidebarnew';

import userPhoto from '../storage/kal-visuals-square.jpg';
import cardImage from '../storage/home-decor-1.jpg';


function MainDiv() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container fluid >
      <Row>
        <Col xs={12} lg={2} className="d-lg-block d-none text-center vh-100 sidebar">
          <Offcanvas disableScrolling={true} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body >
              <Sidebarnew />
            </Offcanvas.Body>
          </Offcanvas>
          <Sidebarnew />
        </Col>
        <Col xs={12} lg={10}>
          <Row className='mx-2'>
            <Col xs={12} lg={12} className="border topBox mt-lg-2 mb-5">
              <div className='d-flex align-items-center justify-content-between m-2'>
                <h4 className='text-white'>My prfolie</h4>
                <div className='d-lg-none'>
                  <span className='togglebtn' onClick={handleShow} ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                  </svg></span>
                </div>
              </div>
              <div className='blur shadow p-3 mb-5 innerbox d-flex align-items-center justify-content-between'>
                <div className="d-flex align-items-center justify-content-between">
                  <img className='avatar' alt='testingimage' src={userPhoto} />
                  <div className='m-3'>
                    <p className='mb-0'><b>Alec Thompson</b></p>
                    <p className='mb-0'>CEO / Co-Founder</p>
                  </div>
                </div>
                <div>
                  <button className='bg-white btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                  </svg><span className='ms-2'>App</span></button>
                  <button className='btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                  </svg><span className='ms-2'>Message</span></button>
                  <button className='btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
                  </svg><span className='ms-2'>Setting</span></button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mx-2'>
            <Col xs={12} lg={4} className=" bg-white shadow p-3 mb-5 bg-body border rounded-4 mx-lg-2 mt-lg-5 mt-5">
              <h5><b>Platform Settings</b></h5>
              <p className='text-muted'>ACCOUNT</p>
              <div className='d-flex align-items-center justify-content-center mb-4'>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <p className='m-0 text-muted'>Email me when someone follows</p>
              </div>
              <div className='d-flex align-items-center justify-content-center mb-4'>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <p className='m-0 text-muted'>Email me when someone follows</p>
              </div>
              <div className='d-flex align-items-center justify-content-center mb-4'>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <p className='m-0 text-muted'>Email me when someone follows</p>
              </div>
              <h5><b>Application</b></h5>
              <div className='d-flex align-items-center justify-content-center mb-4'>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <p className='m-0 text-muted'>Email me when someone follows</p>
              </div>
              <div className='d-flex align-items-center justify-content-center mb-4'>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <p className='m-0 text-muted'>Email me when someone follows</p>
              </div>
              <div className='d-flex align-items-center justify-content-center mb-4'>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <p className='m-0 text-muted'>Email me when someone follows</p>
              </div>
            </Col>
            <Col xs={12} lg={3} className="bg-white shadow p-3 mb-5 bg-body border rounded-4 mx-lg-2 mt-lg-5">
              <h5><b>Profile Information</b></h5>
              <p className='text-muted'>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
              <p className='mb-1'><b>Full Name:</b><span className='text-muted'> Vivek kapasia</span></p>
              <p className='mb-1'><b>Full Name:</b><span className='text-muted'> Vivek kapasia</span></p>
              <p className='mb-1'><b>Full Name:</b><span className='text-muted'> Vivek kapasia</span></p>
              <p className='mb-1'><b>Full Name:</b><span className='text-muted'> Vivek kapasia</span></p>
              <p className='mb-1'><b>Full Name:</b><span className='text-muted'> Vivek kapasia</span></p>
            </Col>
            <Col xs={12} lg={4} className="bg-white shadow p-3 mb-5 bg-body border rounded-4 mx-lg-2 mt-lg-5">
              <h5><b>Conversations</b></h5>
              <Row>
                <Col xs={2} md={2} className="">
                  <img className='avatar' alt='testingimage' src={userPhoto} />
                </Col>
                <Col xs={6} md={6} className="">
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm"><b>Sophie B.</b></h6>
                    <p className="mb-0 text-xs text-muted">Hi! I need more information..</p>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <a className="btn atag pe-3 ps-0 mb-0 ms-auto" href="/#"><b>REPLY</b></a>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} className="">
                  <img className='avatar' alt='testingimage' src={userPhoto} />
                </Col>
                <Col xs={6} md={6} className="">
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm"><b>Sophie B.</b></h6>
                    <p className="mb-0 text-xs text-muted">Hi! I need more information..</p>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <a className="btn atag pe-3 ps-0 mb-0 ms-auto" href="/#"><b>REPLY</b></a>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} className="">
                  <img className='avatar' alt='testingimage' src={userPhoto} />
                </Col>
                <Col xs={6} md={6} className="">
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm"><b>Sophie B.</b></h6>
                    <p className="mb-0 text-xs text-muted">Hi! I need more information..</p>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <a className="btn atag pe-3 ps-0 mb-0 ms-auto" href="/#"><b>REPLY</b></a>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} className="">
                  <img className='avatar' alt='testingimage' src={userPhoto} />
                </Col>
                <Col xs={6} md={6} className="">
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm"><b>Sophie B.</b></h6>
                    <p className="mb-0 text-xs text-muted">Hi! I need more information..</p>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <a className="btn atag pe-3 ps-0 mb-0 ms-auto" href="/#"><b>REPLY</b></a>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} className="">
                  <img className='avatar' alt='testingimage' src={userPhoto} />
                </Col>
                <Col xs={6} md={6} className="">
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm"><b>Sophie B.</b></h6>
                    <p className="mb-0 text-xs text-muted">Hi! I need more information..</p>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <a className="btn atag pe-3 ps-0 mb-0 ms-auto" href="/#"><b>REPLY</b></a>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} className="">
                  <img className='avatar' alt='testingimage' src={userPhoto} />
                </Col>
                <Col xs={6} md={6} className="">
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm"><b>Sophie B.</b></h6>
                    <p className="mb-0 text-xs text-muted">Hi! I need more information..</p>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <a className="btn atag pe-3 ps-0 mb-0 ms-auto" href="/#"><b>REPLY</b></a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='mx-2'>
            <Col xs={12} md={12} className="bg-white shadow p-3 mb-5 bg-body  border rounded-4 mt-3">
              <h3>Projects</h3>
              <p className='text-muted'>Architects design houses</p>
              <Row>
                <Col xs={12} md={4} lg={3} className="rounded-4 mb-2">
                  <Card className='p-2 border-0'>
                    <Card.Img variant="top" className='shadow bg-body rounded-4' src={cardImage} />
                    <Card.Body>
                      <Card.Text>Project #2</Card.Text>
                      <Card.Title>Modern</Card.Title>
                      <Card.Text className='text-muted'>
                        As Uber works through a huge amount of internal management turmoil.
                      </Card.Text>
                      <Button className='borderbtn' >VIEW PROJECT</Button>

                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4} lg={3} className="rounded-4 mb-2">
                  <Card className='p-2 border-0'>
                    <Card.Img variant="top" className='shadow bg-body rounded-4' src={cardImage} />
                    <Card.Body>
                      <Card.Text>Project #2</Card.Text>
                      <Card.Title>Modern</Card.Title>
                      <Card.Text className='text-muted'>
                        As Uber works through a huge amount of internal management turmoil.
                      </Card.Text>
                      <Button className='borderbtn' >VIEW PROJECT</Button>

                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4} lg={3} className="rounded-4 mb-2">
                  <Card className='p-2 border-0'>
                    <Card.Img variant="top" className='shadow bg-body rounded-4' src={cardImage} />
                    <Card.Body>
                      <Card.Text>Project #2</Card.Text>
                      <Card.Title>Modern</Card.Title>
                      <Card.Text className='text-muted'>
                        As Uber works through a huge amount of internal management turmoil.
                      </Card.Text>
                      <Button className='borderbtn' >VIEW PROJECT</Button>

                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4} lg={3} className="rounded-4 mb-2">
                  <Card className='p-2 border-0'>
                    <Card.Img variant="top" className='shadow bg-body rounded-4' src={cardImage} />
                    <Card.Body>
                      <Card.Text>Project #2</Card.Text>
                      <Card.Title>Modern</Card.Title>
                      <Card.Text className='text-muted'>
                        As Uber works through a huge amount of internal management turmoil.
                      </Card.Text>
                      <Button className='borderbtn' >VIEW PROJECT</Button>

                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} className="rounded-3 mt-2">
              <p>© 2024, made with  by Creative Tim for a better web.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainDiv;
