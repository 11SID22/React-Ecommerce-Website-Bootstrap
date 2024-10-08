import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const CustomAlbumList = (props) => {
    return (
        <Container>
            <Row className="justify-content-center mb-2">
                <Col xs="auto">
                    <h5 className="text-center">{props.albumName}</h5>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Card className="h-100" style={{ width: '200px' }}>
                        <Card.Img
                            variant="top"
                            src={props.imageUrl}
                            alt={props.title}
                            style={{ height: '150px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>Price: ${props.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomAlbumList;
