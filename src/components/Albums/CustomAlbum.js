import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomAlbumList from "./CustomAlbumList";

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const CustomAlbum = () => {
  return (
    <Container className="mt-4">
      {/* General title */}
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <h1 className="text-center">Music</h1> {/* Main title */}
        </Col>
      </Row>

      {/* Display album cards */}
      <Row>
        {productsArr.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={6} className="mb-4">
            <CustomAlbumList
              albumName={`Album${index + 1}`}  // Assign Album1, Album2, etc.
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomAlbum;
