import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h4 style={{ marginTop: "0px" }}>{this.props.companyName}</h4>

            <p>
              {this.props.workStart} - {this.props.workEnd}
            </p>
          </Cell>
          <Cell col={8}>
            <strong>{this.props.positionName}</strong>
            <p>{this.props.jobDescription}</p>
            <p>{this.props.jobDescriptionTwo}</p>
            <p>{this.props.jobDescriptionThree}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
