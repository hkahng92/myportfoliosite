import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  //activeTab === 0 means that it is point towards React tab. Not that there are no items in there
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#E95959",
                height: "176px",
                background:
                  "url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover"
              }}
            >
              The Weather App
            </CardTitle>
            <CardText>
              By providing the town name and country code, you could find the
              current weather of that location!
            </CardText>
            <CardActions border>
              {/*Change the destination path for the buttons*/}
              <a
                href="https://github.com/hkahng92/weather-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://hkahng92.github.io/weather-app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>

              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#E95959",
                height: "176px",
                background:
                  "url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover"
              }}
            >
              Counter App
            </CardTitle>
            <CardText>
              This project is focused on the robustness of the counter.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/hkahng92/counter-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <Button colored>Live Demo (Coming Soon)</Button>
              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#E95959",
                height: "176px",
                background:
                  "url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover"
              }}
            >
              Shopping-Summary App
            </CardTitle>
            <CardText>
              Basic simulation of shopping cart details. Just like how you see
              it on any online shopping site.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/hkahng92/shopping-summary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <Button colored>Live Demo (Coming Soon)</Button>
              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#FEFEFE",
                height: "176px",
                background:
                  "url(https://png.pngtree.com/svg/20161116/bbb0b8e89d.svg) center / cover"
              }}
            >
              Python
            </CardTitle>
            <CardText>Here is my first Python upload</CardText>
            <CardActions border>
              {/*Change the destination path for the buttons*/}
              <a
                href="https://github.com/hkahng92/weather-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#010101",
                height: "176px",
                background:
                  "url(https://seeklogo.net/wp-content/uploads/2012/03/mysql-vector1.jpg) center / cover"
              }}
            >
              Data Manipulation
            </CardTitle>
            <CardText>Here is my first MySQL upload</CardText>
            <CardActions border>
              {/*Change the destination path for the buttons*/}
              <a
                href="https://github.com/hkahng92/weather-app"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              {/*<Button colored>Live Demo</Button>*/}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>JavaScript & React</Tab>
            <Tab>Python & MySQL</Tab>
          </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
