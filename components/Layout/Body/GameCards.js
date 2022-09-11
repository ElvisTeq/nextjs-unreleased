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
                background: "rgba(0, 0, 0, 0.2)",
                color: "white",
              }}
            >
              <a href={game.url}>
                <Card.Img
                  variant="top"
                  src={game.img}
                  style={{ cursor: "pointer" }}
                />
              </a>

              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
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
                <Card.Link href="#">Link</Card.Link>
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
