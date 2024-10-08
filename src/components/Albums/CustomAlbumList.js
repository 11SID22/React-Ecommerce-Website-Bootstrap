import React, { useContext } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CustomAlbumList = (props) => {
    const cartCtx = useContext(CartContext);

    const addItemToCart = () => {

        cartCtx.addItem({
            id: props.id,
            imageUrl: props.imageUrl,
            title: props.title,
            price: props.price,
            quantity: 1
        })
        console.log('after addItemToCart', cartCtx);
    };
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
            <Row className="justify-content-center mt-1 mb-5" >
                <Col xs="auto">
                    <Button
                        variant="info"
                        onClick={addItemToCart}
                    >
                        Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomAlbumList;
