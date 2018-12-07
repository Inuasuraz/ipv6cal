import React, { Component } from 'react';
import './App.css';
import bulma from '../node_modules/bulma/css/bulma.css'
import IPv6 from 'ip6'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      number: 0
    };
    this.state = {
      IP: "0000", BM: '1',
      IPaddress: '', ipfull: '', totalIPaddresses: '', network: '', networkrange: ''
      , networkrangeend: '', format: ''

    }

    this.handleChangeIP = this.handleChangeIP.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this._Calculator = this._Calculator.bind(this)
  }

  _Calculator() {

    if (this.state.IP != "0000") {

      var a = document.getElementById("select").value

      this.setState({ ipfull: IPv6.normalize(this.state.IP) })
      var resutl = Math.pow(2, 128 - a)
      console.log("resutl" + resutl)
      this.setState({ totalIPaddresses: resutl })
      this.setState({ IPaddress: IPv6.abbreviate(this.state.IP) })
      this.setState({ network: IPv6.abbreviate(this.state.IP) })
      var range
      if (a >= 64) {
        range = IPv6.range(this.state.IP, a, 128);
      } else {
        range = IPv6.range(this.state.IP, a, 128);
      }
      console.log(range)
      this.setState({ networkrangestart: range.start })
      this.setState({ networkrangeend: range.end })
      this.setState({ format: IPv6.ptr(this.state.IP, 64) })
    }
  }

  handleClick(event) {
    console.log(this.state.IP)
    IPv6.normalize(this.state.IP)
    console.log(IPv6.normalize(this.state.IP))
    console.log(this.state.BM)
  }

  handleChangeIP(event) {
    this.setState({ IP: event.target.value })
  }

  buildOptions() {
    var arr = [];

    for (let i = 1; i <= 63; i++) {
      arr.push(<option key={i} value={i} >{i} ({Math.pow(2, 64 - i).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} network /64)</option>)

    }

    for (let i = 64; i <= 128; i++) {
      arr.push(<option key={i} value={i} >{i} ({Math.pow(2, 128 - i).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} addresses)</option>)

    }

    return arr;
  }

  setValue(event) {
    this.setState({ number: event.target.option });
  }



  render() {
    return (

      <div className="container">
        <div className="section">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <div className="box is-centered">

                <div className="section">
                  <a className="headFont"><center>IPv6 Calculator</center></a>
                </div>

                <div className="field">
                  <label className="label">IP-Address</label>
                  <input className="input is-fullwidth" type="text" placeholder="IP-Address" onChange={this.handleChangeIP}></input>
                </div>

                <div className="field">
                  <label className="label">Option</label>
                  <div className="control">
                    <div className="select">
                      <select className="select-board-size" id="select">
                        {this.buildOptions()}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <a className="button is-primary" onClick={this._Calculator}>OK</a>
                </div>

                <div>

                  <table className="table">


                    <tr>
                      <th><abbr title="Name">Name</abbr></th>
                      <th>Value</th>

                    </tr>

                    <tbody>
                      <tr>

                        <td>IP-Address</td>
                        <td>{this.state.IPaddress} / {this.state.BM}</td>
                      </tr>
                      <tr>

                        <td>Network</td>
                        <td>{this.state.network}</td>
                      </tr>
                      <tr>

                        <td>Prefix length</td>
                        <td>{this.state.BM}</td>
                      </tr>
                      <tr>

                        <td>Network range start</td>
                        <td>{this.state.networkrangestart}</td>
                      </tr>
                      <tr>

                        <td>Network range end</td>
                        <td>{this.state.networkrangeend}</td>
                      </tr>
                      <tr>

                        <td>Total IP Addresses</td>
                        <td>{this.state.totalIPaddresses}</td>
                      </tr>
                      <tr>

                        <td>Full IP-Address</td>
                        <td>{this.state.ipfull}</td>
                      </tr>
                      <tr>

                        <td>Ip6.arpa Format</td>
                        <td>{this.state.format}</td>
                      </tr>

                    </tbody>
                  </table>

                </div>
              </div>

              <a><center>Kiatsiri Sarintu 59160081 Com-Sci Group.1</center></a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
