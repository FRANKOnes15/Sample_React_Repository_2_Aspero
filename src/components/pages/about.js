import react from "react";
import Card from 'react-bootstrap/Card';
import myimage from "../mypic.png";

const About = () => {
    return ( 
        <>
        <h1 className="text-light text-center bg-warning col-5 p-3">About Me</h1>
        <Card>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                I am an organised and efficient person with an enquiring mind. I am a flexible person seeking employment which will allow development, growth and make use of my existing skills. am a good listener and learner, and am able to communicate well with people from all walks of life. I am a keen, hard working, reliable and excellent time keeper 
                </Card.Text>
                <img src={myimage} alt='' />
            </Card.Body>
        </Card>
        </>
     );
}
 
export default About;