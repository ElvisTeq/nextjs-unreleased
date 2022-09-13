// Cards Using Bootstrap

import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./GameCards.module.css";

const GameCards = (props) => {
  // Getting games data
  const games = [];
  Object.keys(props).forEach(function (prop) {
    games.push(...props[prop]);
  });

  // Uppercasing games names/dates
  const toUpperCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  games.map((game) => {
    game.name = toUpperCase(game.name);
    game.releaseDate = toUpperCase(game.releaseDate);
    game.platform = toUpperCase(game.platform);
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
              <a href={game.url} rel="noopener noreferrer" target="_blank">
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
                  {game.platform}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#" rel="noopener noreferrer" target="_blank">
                  Store
                </Card.Link>
                <Card.Link
                  href={game.urlMore}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  More
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default GameCards;
