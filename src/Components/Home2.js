import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../Styles/Home2.css";

class ProductCard extends Component {
  render() {
    return (
      <div className="card-product2">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Shoe"
              image={this.props.image}
              style={{ height: 250 }}
            />
            <CardContent>
              <Typography>{this.props.name}</Typography>
              <Typography
                noWrap="true"
                gutterBottom
                variant="body1"
                color="textPrimary"
              >
                {this.props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="text-nowrap"
            >
              More Pictures
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="text-nowrap"
            >
              Buy Now $69.99
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default ProductCard;
