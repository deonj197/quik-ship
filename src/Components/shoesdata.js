import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
class shoesdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesdata: [
        {
          id: 1,
          image: require("../images/Nike1.jpg"),
          name: "Nike Pro Max",
          description: "Black nike running shoe"
        },
        {
          id: 2,
          image: require("../images/Nike3.jpg"),
          name: "Nike Pro Max",
          description: "White nike running shoe"
        },
        {
          id: 3,
          image: require("../images/Nike3.jpg"),
          name: "Nike Pro Max",
          description: "Nike running shoe"
        },
        {
          id: 4,
          image: require("../images/Nike3.jpg"),
          name: "Nike Pro Max",
          description: "White Nike running shoe"
        },

        {
          id: 5,
          image: require("../images/Nike2.jpg"),
          name: "Nike Glide Max",
          description: "White Nike running shoe"
        },

        {
          id: 6,
          image: require("../images/Nike2.jpg"),
          name: "Nike Glide Max",
          description: "White Nike running shoe"
        },

        {
          id: 7,
          image: require("../images/Nike2.jpg"),
          name: "Nike Glide Max",
          description: "White Nike running shoe"
        },

        {
          id: 8,
          image: require("../images/Nike2.jpg"),
          name: "Nike Glide Max",
          description: "White Nike running shoe"
        }
      ]
    };
  }
  render() {
    let home2 = this.state.shoesdata.map(shoe => {
      return (
        <Col>
          <Home2
            key={shoe.id}
            image={shoe.image}
            name={shoe.name}
            description={shoe.description}
          />
        </Col>
      );
    });
    return (
      <Container>
        <Row>{home2}</Row>
      </Container>
    );
  }
}

export default shoesdata;
