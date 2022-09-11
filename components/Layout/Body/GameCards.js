import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./GameCards.module.css";

const GameCards = (props) => {
  const games = [];
  Object.keys(props).forEach(function (prop) {
    games.push(...props[prop]);
  });

  return (
    <Fragment>
      <div className={classes.align}>
        {games.map((game) => (
          <div key={game.id} className={classes.main}>
            <Card
              style={{
                width: "18rem",
                background: "transparent",
                color: "white",
              }}
            >
              <Card.Img variant="top" src={game.img} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item
                  style={{ background: "transparent", color: "white" }}
                >
                  {game.releaseDate}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ background: "transparent", color: "white" }}
                >
                  {"$" + game.price}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ background: "transparent", color: "white" }}
                >
                  {game.platform[0].toUpperCase() + game.platform.slice(1)}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href={game.url}>Pre-Purchase</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default GameCards;
