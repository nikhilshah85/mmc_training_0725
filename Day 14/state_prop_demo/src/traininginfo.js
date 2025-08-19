import { Component } from "react";

class Traininginfo extends Component
{
    render()
    {
        return(
            <div>
                <h1>Training Info</h1>

<h2>Trainer Name : {this.props.trainerName}</h2>
<h2>Mode of Training : {this.props.modeOfTraining}</h2>
<button onClick={this.props.greetings}>Greet</button>          
            </div>
        );
    }
}

export default Traininginfo;