import React from "react";
import Card from "react-bootstrap/Card";
import './styles.scss';

export default function ProductCard({ product }) {
  return (
    <div>
      <Card className="h-100 radius-3" style={{ width: '23rem' }}>
        <Card.Img className="border-bottom" variant="top" src={product.images} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <div className="add-cart"><button>Add to cart</button></div>
        </Card.Body>
      </Card>
    </div>
  );
}
