import React from "react";
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
  }
});

export default function ProductCard() {
  const classes = useStyle();
  return (
    <div className="card-product2">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Black Shoe"
            height="150px"
            image="./images/Nike1.jpg"
            title="Black Nike Shoe"
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              Black Nike running shoe. Perfect for the most seasoned runner.
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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Black Shoe"
            height="150px"
            image="./images/Nike1.jpg"
            title="Black Nike Shoe"
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              Black Nike running shoe. Perfect for the most seasoned runner.
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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Black Shoe"
            height="150px"
            image="./images/Nike1.jpg"
            title="Black Nike Shoe"
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              Black Nike running shoe. Perfect for the most seasoned runner.
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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Black Shoe"
            height="150px"
            image="./images/Nike1.jpg"
            title="Black Nike Shoe"
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              Black Nike running shoe. Perfect for the most seasoned runner.
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
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Black Shoe"
            height="150px"
            image="./images/Nike1.jpg"
            title="Black Nike Shoe"
          />
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              Black Nike running shoe. Perfect for the most seasoned runner.
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
