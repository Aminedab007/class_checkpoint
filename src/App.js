import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import moi from "./assets/img/moi.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Amine Dab",
        bio: "Frontend Developer passionate about creating clean, modern and user-friendly interfaces.",
        imgSrc: moi, // ton image locale
        profession: "Frontend Developer",
      },
      shows: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="app-bg d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
        <div className="container">
          <h1 className="mb-4 fw-semibold text-primary">
            👤 Class Component Checkpoint
          </h1>

          <button
            className="btn btn-outline-primary px-4 py-2 mb-4"
            onClick={this.toggleShow}
          >
            {shows ? "Hide Profile" : "Show Profile"}
          </button>

          {shows && (
            <div className="card shadow-sm border-0 mx-auto" style={{ maxWidth: "22rem" }}>
              <div className="card-body">
                <img
                  src={person.imgSrc}
                  className="rounded-circle mb-3 shadow-sm"
                  alt="Profile"
                  style={{ width: "140px", height: "140px", objectFit: "cover" }}
                />
                <h4 className="fw-bold text-dark">{person.fullName}</h4>
                <p className="text-muted mb-2">{person.profession}</p>
                <p className="text-secondary small">{person.bio}</p>
              </div>
            </div>
          )}

          <p className="mt-4 text-secondary">
            ⏱ Component mounted since{" "}
            <span className="fw-bold text-primary">{timeSinceMount}</span>{" "}
            seconds
          </p>
        </div>
      </div>
    );
  }
}

export default App;
