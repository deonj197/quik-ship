import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../Styles/Home2.css";

const useStyle = makeStyles({
  card: {
    maxWidth: 300
  },
  media: {
    height: 150
  }
});
class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesdata: [
        {
          id: 1,
          image: "../images/Nike1.jpg",
          name: "Nike Pro Max",
          description: "Black nike running shoe"
        },
        {
          id: 2,
          image: "../images/Nike2.jpg",
          name: "Nike Pro Max",
          description: "White nike running shoe"
        },
        {
          id: 3,
          image: "../images/Nike3.jpg",
          name: "Nike Pro Max",
          description: "Nike running shoe"
        }
      ]
    };
  }
  render() {
    return (
      <div className="card-product2">
        <Card>
          <CardActionArea>
            <CardMedia component="img" alt="Shoe" image={this.props.image} />
            <CardContent>
              <Typography>{this.props.name}</Typography>
              <Typography gutterBottom variant="body1" color="textPrimary">
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              More Pictures
            </Button>
            <Button size="small" color="primary">
              Buy Now $69.99
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default ProductCard;
