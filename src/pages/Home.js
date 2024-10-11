import React from "react";
import CustomHeader from "../components/Layout/CustomHeader";
import { Card, CardBody, Container, Row, Col, Button, Table } from "react-bootstrap"; // Import Table
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import CustomFooter from "../components/Layout/CustomFooter";

const Home = () => {
    const toursContent = (
        <>
            <tr>
                <td>JUL 16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td><Button variant="info" className="text-white">BUY TICKETS</Button></td>
            </tr>
            <tr>
                <td>JUL 19</td>
                <td>TORONTO, ON</td>
                <td>BUDWEISER STAGE</td>
                <td><Button variant="info" className="text-white">BUY TICKETS</Button></td>
            </tr>
            <tr>
                <td>JUL 22</td>
                <td>
                    BRISTOW, VA</td>
                <td>JIGGY LUBE LIVE</td>
                <td><Button variant="info" className="text-white">BUY TICKETS</Button></td>
            </tr>
            <tr>
                <td>JUL 29</td>
                <td>PHOENIX, AZ</td>
                <td>AK-CHIN PAVILION</td>
                <td><Button variant="info" className="text-white">BUY TICKETS</Button></td>
            </tr>
            <tr>
                <td>AUG 2</td>
                <td>LAS VEGAS, NV</td>
                <td>T-MOBILE ARENA</td>
                <td><Button variant="info" className="text-white">BUY TICKETS</Button></td>
            </tr>
            <tr>
                <td>AUG 7</td>
                <td>CONCORD, CA</td>
                <td>CONCORD PAVILION</td>
                <td><Button variant="info" className="text-white">BUY TICKETS</Button></td>
            </tr>
        </>
    );

    return (
        <div>
            <CustomHeader>
                <Container className="mt-4">
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} lg={4}>
                            <Card bg="secondary" border="info">
                                <CardBody className="text-center">
                                    <h2 className="text-light">Get our Latest Album</h2>
                                </CardBody>
                            </Card>
                            {/* Circular play button with blue border */}
                            <Button
                                variant="light"
                                className="mt-3 p-3 rounded-circle border border-info border-2" // Blue border
                            >
                                <FontAwesomeIcon icon={faPlay} size="2x" className="text-secondary" />
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </CustomHeader>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col className="align-items-center">
                        <h3 className="mb-4 text-center">TOURS</h3>
                        <Table striped hover>
                            <tbody>
                                {toursContent}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            {/* Hide social icons in footer */}
            <CustomFooter showSocialIcons={false} />
        </div>
    );
};

export default Home;
