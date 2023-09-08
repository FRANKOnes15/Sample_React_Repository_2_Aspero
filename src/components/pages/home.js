import react from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myimage from "../mypic1.png";
const Home = () => {
    return ( 
    <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
        <Card.Title>YOURE WEB DEVELOPER</Card.Title>
        <Card.Text>
        "The difference between great people and everyone else is that great people create their lives actively, while everyone else is created by their lives, passively waiting to see where life takes them next. The difference between the two is the difference between living fully and just existing."  Michael E. Gerber 
        </Card.Text>
        <img class="rounded-circle" src={myimage} alt='' />
        
        <Button variant="primary bg-dark p-4 col-md-4 w-20">More Information</Button>
      </Card.Body>
        <div className="bg-black">
        <Card style={{ width: '60rem' }}>
      <Card.Img variant="top"/>
      <Card.Body>
        <Card.Text>
        A web developer should fully understand their role and how they contribute to web design and development
        <ul>
            <li>Enthusiasm</li>
            <li>Motivation</li>
            <li>Experience</li>
            <li>Consideration of standards</li>
            <li>Clear understanding of web development processes</li>
        </ul>
        </Card.Text>
      </Card.Body>
    </Card>
        
        </div>
    </Card>
    
     );
}
 
export default Home;