import React from 'react';
import './App.css';

class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            deciseconds: 0
        }
    }

    startWatch(){
        const timeStart = new Date(); 
        setInterval(()=>{
                let time = new Date().getTime()-timeStart.getTime();
                this.setState({
                        minutes: Math.floor(time/(1000*60)),
                        seconds: Math.floor(time/1000)%60,
                        deciseconds: Math.floor(time/10)%100
                    });
            }, 50);
    }

    babcia(number){
        return number<10? "0"+number : number;  
    }

    render(){
        return (
            <div className="container">
                <div className="display">
                    {this.babcia(this.state.minutes)}:
                    {this.babcia(this.state.seconds)}:
                    {this.babcia(this.state.deciseconds)}
                </div>
                <button onClick={()=>{this.startWatch()}}>START</button>
            </div>
        );
    }

}

export default App;

