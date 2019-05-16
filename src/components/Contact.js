import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import myPhotoThree from "../img/myPhoto3.jpg";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Hyunseok Kahng</h2>
            <img src={myPhotoThree} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Thank you for visiting my portfolio website! I hope you were able
              to get a pretty good understanding of who I am, and what I am
              capable of. However, that is not all! If you have any questions or
              anything to discuss with me, please contact me via phone and/or
              email. I will be in touch with you as soon as possible.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            {/*NEED TO FIX THIS PART. WHEN I GO MOBILE, CONTACT ME PART GETS SHIFTED IN A WEIRD WAY*/}
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (201) 245 7837
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    hkahng92@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
