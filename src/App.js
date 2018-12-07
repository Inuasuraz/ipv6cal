import React, { Component } from 'react';
import './App.css';
import bulma from '../node_modules/bulma/css/bulma.css'
class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      number : 0
    }

  }

  buildOptions() {
    var arr = [];

    for (let i = 1; i <= 63; i++) {
      arr.push(<option key={i} value="{i}">{i} ({Math.pow(2,64-i).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} network /64)</option>)
      
    }

    for (let i = 64 ; i <= 128 ; i++){
      arr.push(<option key={i} value="{i}">{i} ({Math.pow(2,128-i).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} addresses)</option>)
      
    }

    return arr;
  }

  calculate(event){
   console.log(this.state.number)
  }


  render() {
    return (

      <div className="container">
        <div className="section">
          <div className="columns is-centered">
            <div className="column is-three-fifths">
              <div className="box is-centered">

                <div className="section">
                  <text className="headFont"><center>IPv6 Calculator</center></text>
                </div>

                <div className="field">
                  <label className="label">IP-Address</label>
                  <input class="input is-fullwidth" type="text" placeholder="IP-Address"></input>
                </div>

                <div className="field">
                  <label className="label">Option</label>
                  <div className="control">
                    <div className="select">
                      <select className="select-board-size">
                        {this.buildOptions()}
                      </select>
                      <button className="button">OK</button>
                    </div>
                  </div>
                </div>

                <div className="field">
                <a class="button is-primary" onClick={this.calculate}>Primary</a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
