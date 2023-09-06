import React, {Component} from "react";


class ClassState extends Component{

    constructor() {
        super()
        this.state = {
            sampleContent: "Hello Worlds",
            bgcol: "red"
        };
        this.changeElement = this.changeElement.bind(this);
        //Binding Method
    }

    changeElement(){
        //element = "wow nagbago";
        //document.getElementById("sampleElement").innerHtml = "Wow nabago";
        // this.setState({bgcol: "yellow"})
        this.state.bgcol == "red" ? this.setState({sampleContent: "wow nagabo" ,bgcol: "yellow"}) : this.setState({bgcol: "red"});
        //sample conditional statement using ternary operator
        
    }

    render(){
        // let element ="meow"
        const {bgcol, sampleContent} = this.state;
        //for destructuring State
        return(
            <>
                <h1 id="sampleElement" style={{background: bgcol}}>{sampleContent}</h1>
                <button onClick={this.changeElement}>Change Sample Element</button>
                {/* <button onClick={() => this.changeElement()}>Change Sample Element</button> */}
            </>
        );
    }
}

export default ClassState;