import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";

class shirtdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shirtdata: [
        {
          id: 4,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        },
        {
          id: 5,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        },
        {
          id: 6,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        },
        {
          id: 7,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        },
        {
          id: 5,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        },
        {
          id: 6,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        },
        {
          id: 7,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        },
        {
          id: 7,
          image: require("../images/Space.jpg"),
          name: "Space Jelly",
          descritpion: "Astronaut with space jellyfish"
        }
      ]
    };
  }

  render() {
    let home2 = this.state.shirtdata.map(shirt => {
      return (
        <Col>
          <Home2
            key={shirt.id}
            image={shirt.image}
            name={shirt.name}
            descritpion={shirt.descritpion}
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

export default shirtdata;
