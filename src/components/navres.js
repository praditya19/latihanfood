import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class Navres extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar style={{ width: "100px" }} light expand="md">
            <NavbarBrand href="/">
              <img
                src="https://lh3.googleusercontent.com/-q-onx-ad9O4/XA6ENYNM2VI/AAAAAAAAAIg/zfek1GzgJ1cW7cYNHyRM95DS7xAv0ILqwCHMYCw/%255BUNSET%255D"
                width="140"
                alt="/"
              />
            </NavbarBrand>
          </Navbar>
        </div>
      </div>
    );
  }
}
