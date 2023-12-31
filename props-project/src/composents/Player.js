import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import PlayerList from "./PlayersList";

function Player({ nom, equipe, nationalité, numeroMaillot, age, image }) {
  return (
    <Card
      style={{
        width: "18rem",
        marginBottom: "20px",
      }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          {equipe}
          <br></br>
          {nationalité}
          <br></br>
          {numeroMaillot}
          <br></br>
          {age}
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
  );
}

export default Player;
