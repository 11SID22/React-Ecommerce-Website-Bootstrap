import React from "react";
import CustomHeader from "../components/Layout/CustomHeader";
import { Container, Row, Col, Image } from "react-bootstrap";
import BandMembersimage from '../assets/BandMembers.png'; // Correct image import
import CustomFooter from "../components/Layout/CustomFooter";

const About = () => {
    return (
        <div>
            <CustomHeader />
            <Container className="mt-4">
                {/* Centered ABOUT title */}
                <Row className="justify-content-center mb-4">
                    <Col xs="auto" className="text-center">
                        <h1>ABOUT</h1>
                    </Col>
                </Row>

                {/* Image on the left and text on the right */}
                <Row className="align-items-center">
                    {/* Image column on the left */}
                    <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                        <Image
                            src={BandMembersimage}
                            alt="Picture of band members"
                            className="img-fluid"
                            roundedCircle
                            style={{ width: '250px', height: '250px', objectFit: 'cover' }} // Ensures proper scaling without distortion
                        />
                    </Col>

                    {/* Text column on the right */}
                    <Col xs={12} md={8}>
                        <p>
                        Lost in a whisper, a faint echo floats through the shadows of the castle, where dreams dance in the flickering candlelight. This realm holds stories untold, secrets woven in the fabric of time, and magic that shimmers in the twilight. Each corner of the castle breathes life, resonating with the laughter of old souls and the echoes of forgotten melodies. Here, every step leads to wonder, every glance reveals mysteries, and every moment is a journey into the heart of enchantment. Embrace the allure of the unknown, for the night beckons with tales waiting to unfold.Lost in a whisper, a faint echo floats through the shadows of the castle, where dreams dance in the flickering candlelight. This realm holds stories untold, secrets woven in the fabric of time, and magic that shimmers in the twilight. Each corner of the castle breathes life, resonating with the laughter of old souls and the echoes of forgotten melodies. Here, every step leads to wonder, every glance reveals mysteries, and every moment is a journey into the heart of enchantment. Embrace the allure of the unknown, for the night beckons with tales waiting to unfold.
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* Footer */}
            <CustomFooter showSocialIcons={true}/>
        </div>
    );
};

export default About;
