import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_status: false,
      style_global_color: {
        color: "#FFFFFF",
      },
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <nav
            class="navbar navbar-expand-lg fixed-top navbar-light"
            id="mainNav"
            style={{ backgroundColor: "#000080" }}
          >
            <div class="container">
              <div
                class="collapse navbar-collapse"
                id="navbarResponsive1"
                style={{ width: "100%", flexGrow: "0" }}
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="/Home"
                    >
                      Home
                    </a>
                  </li>

                  <li style={{ cursor: "pointer" }} class="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="/"
                    >
                      Maps
                    </a>
                  </li>
                  <li style={{ cursor: "pointer" }} class="nav-item">
                    <a
                      style={{ cursor: "pointer" }}
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="/table.html"
                    >
                      Table
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      style={this.state.style_global_color}
                      href="/News"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive1"
                aria-controls="navbarResponsive1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </div>

<<<<<<< HEAD
        <div></div>
=======
        <div className="App">
          <header className="App-header">
            
            
            <img src="microphone.png" alt="Italian Trulli" width = "200" height = "100" ></img>
            <button type="button">Click here to ask for corona stats!</button>
          </header>
        </div>
>>>>>>> 43fbc30f7f19bdae9168af4680c0b75bcf6982f9
      </div>
    );
  }
}

export default withRouter(App);
