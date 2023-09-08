import react from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
let link = 'https://www.facebook.com/';


const Contact = () => {
    return ( 
        <>
        <h3 className="text-light text-center bg-warning col-5 p-3">My Contact Number or Social media</h3>
        <Card>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                <div className="">
                <a href={link}>
                    <h4>my Facebook</h4>
                </a>
                <a href="https://www.instagram.com/ Link {   text-decoration: none; }">
                    <h4>my Twittwer</h4>
                </a>
                <a href="https://twitter.com/">
                    <h4>my Istagram</h4>
                </a>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
        <div className="card-slot bg-dark text-center">
            <Card style={{ width: '60rem' }}>
                <Card.Body>
                    <Card.Title> MY ADDRESS</Card.Title>
                    <Card.Text>
                        Blk 17 Lot 21 Venezia Townhomes sta.maria bulacan
                        brgy.San vicente. zip code 3017.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Tel.0282422338</ListGroup.Item>
                <ListGroup.Item>Globe#:09532895654</ListGroup.Item>
                <ListGroup.Item>Smart#:09532895654</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#"className="text-danger">GMAIL</Card.Link>
                    <Card.Link href="#">MESSAGE ON VIBER</Card.Link>
                </Card.Body>
            </Card>
        </div>
        </>
     );
}
 
export default Contact;