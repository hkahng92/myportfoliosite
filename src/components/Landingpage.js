import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import myPhoto from "../img/myPhoto.jpg";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={myPhoto}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Future Software Developer</h1>
              <hr />
              <p>JavaScript | React | Python | MySQL </p>

              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  href="https://www.linkedin.com/in/hyunseok-kahng-92370990/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github*/}
                <a
                  href="https://github.com/hkahng92?tab=repositories"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*Instragram*/}
                <a
                  href="https://www.instagram.com/hkxcii/?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
