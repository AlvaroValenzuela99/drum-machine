import React from 'react';
import './DrumMachine.css';

class DrumMachine extends React.Component{

    playQ(){
        document.getElementById('Q').play();
        document.getElementById('display').textContent = "Heater 1"
    }
    playW(){
        document.getElementById('W').play();
        document.getElementById('display').textContent = "Heater 2"
    }
    playE(){
        document.getElementById('E').play();
        document.getElementById('display').textContent = "Heater 3"
    }
    playA(){
        document.getElementById('A').play();
        document.getElementById('display').textContent = "Heater 4"
    }
    playS(){
        document.getElementById('S').play();
        document.getElementById('display').textContent = "Clap"
    }
    playD(){
        document.getElementById('D').play();
        document.getElementById('display').textContent = "Open-HH"
    }playZ(){
        document.getElementById('Z').play();
        document.getElementById('display').textContent = "Kick-n'-Hat"
    }
    playX(){
        document.getElementById('X').play();
        document.getElementById('display').textContent = "Kick"
    }
    playC(){
        document.getElementById('C').play();
        document.getElementById('display').textContent = "Closed-HH"
    }

    render(){

        window.onkeydown = function(event){
            switch(event.keyCode){
                case 81:
                    document.getElementById('Q').play();
                    document.getElementById('display').textContent = "Heater 1"
                    break;
                case 87:
                    document.getElementById('W').play();
                    document.getElementById('display').textContent = "Heater 2"
                    break;
                case 69:
                    document.getElementById('E').play();
                    document.getElementById('display').textContent = "Heater 3"
                    break;
                case 65:
                    document.getElementById('A').play();
                    document.getElementById('display').textContent = "Heater 4"
                    break;
                case 83:
                    document.getElementById('S').play();
                    document.getElementById('display').textContent = "Clap"
                    break;
                case 68:
                    document.getElementById('D').play();
                    document.getElementById('display').textContent = "Open-HH"
                    break;
                case 90:
                    document.getElementById('Z').play();
                    document.getElementById('display').textContent = "Kick-n'-Hat"
                    break;
                case 88:
                    document.getElementById('X').play();
                    document.getElementById('display').textContent = "Kick"
                    break;
                case 67:
                    document.getElementById('C').play();
                    document.getElementById('display').textContent = "Closed-HH"
                    break;
                default:
                    console.log("no key pressed");
            }
        }

        return(
           <div id="drum-machine">
           <div className="drums">
                <div className="drum-pad" id="drum-Q" onClick={this.playQ}>
                    Q
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
                </div>
                <div className="drum-pad" id="drum-W" onClick={this.playW}>
                    W
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
                </div>
                <div className="drum-pad" id="drum-E" onClick={this.playE}>
                    E
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
                </div>
                <div className="drum-pad" id="drum-A" onClick={this.playA}>
                    A
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
                </div>
                <div className="drum-pad" id="drum-S" onClick={this.playS}>
                    S
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
                </div>
                <div className="drum-pad" id="drum-D" onClick={this.playD}>
                    D
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
                </div>
                <div className="drum-pad" id="drum-Z" onClick={this.playZ}>
                    Z
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
                </div>
                <div className="drum-pad" id="drum-X" onClick={this.playX}>
                    X
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
                </div>
                <div className="drum-pad" id="drum-C" onClick={this.playC}>
                    C
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
                </div>
           </div>
            
            <div className="functions">
                <div id="author">A.V.G Drum Machine</div>
                <div id="display"></div>
            </div>
            
                
           </div> 
        )
    }
}

export default DrumMachine;