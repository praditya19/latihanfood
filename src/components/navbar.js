import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Card from "./card";
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar style={{ width: "1000" }} color="success" light expand="md">
            <NavbarBrand href="/">
              <img
                src="https://bilba.go-jek.com/dist/img/gojek-logo.png"
                width="130"
                height="50"
                alt="/"
              />
            </NavbarBrand>
          </Navbar>
          <br />
          <Card />
        </div>
      </div>
    );
  }
}
