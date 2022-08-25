import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import classes from "./GameCards.module.css";

const GameCards = () => {
  return (
    <Fragment>
      <div className={classes.align}>
        <div className={classes.main}>
          <Card
            style={{
              width: "18rem",
              background: "transparent",
              color: "white",
            }}
          >
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className={classes.main}>
          <Card
            style={{
              width: "18rem",
              background: "transparent",
              color: "white",
            }}
          >
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className={classes.main}>
          <Card
            style={{
              width: "18rem",
              background: "transparent",
              color: "white",
            }}
          >
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item
                style={{ background: "transparent", color: "white" }}
              >
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default GameCards;
