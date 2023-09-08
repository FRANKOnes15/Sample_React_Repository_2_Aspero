import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import react from "react";
const projects = () => {
    return ( 
        <>
        <h1 className="text-light text-center bg-warning col-5 p-4">My Projects</h1>
        <div className="d-flex flex-row text-center p-4 ">
            <Card style={{ width: '35rem' }}>
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title>MIni P-1</Card.Title>
                    <Card.Text>
                    Ilo-Ilo City travel Blog & documentary website
                    created July 2023
                    </Card.Text>
                    <a href="https://github.com/FRANKOnes15/miniproject1_aspero.git">
                    <Button variant="dark">Git Files</Button>
                    </a>
                </Card.Body>
            </Card>
            <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>MIni P-2</Card.Title>
                    <Card.Text>
                    E-commerce website Batman merchandise
                    created  Aug 31 2023
                    </Card.Text>
                    <a href='https://github.com/FRANKOnes15/mp2.git'>
                    <Button variant="dark">Git Files</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
        </>
     );
}
 
export default projects;