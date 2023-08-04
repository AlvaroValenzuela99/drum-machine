import React from 'react';

class DrumMachine extends React.Component{
    render(){
        return(
           <div id="drum-machine">
           <div className="drums">
                <div className="drum-pad">
                    Q
                </div>
                <div className="drum-pad">
                    W
                </div>
                <div className="drum-pad">
                    E
                </div>
                <div className="drum-pad">
                    A
                </div>
                <div className="drum-pad">
                    S
                </div>
                <div className="drum-pad">
                    D
                </div>
                <div className="drum-pad">
                    Z
                </div>
                <div className="drum-pad">
                    X
                </div>
                <div className="drum-pad">
                    C
                </div>
           </div>
            
            <div id="author">A.V.G Drum Machine</div>
            <div id="power">Power</div>
            <div id="display">Display</div>
            <div id="volume">Volume</div>
                
           </div> 
        )
    }
}

export default DrumMachine;