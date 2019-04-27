import React from "react";
import { Card, Button, CardImg, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
const Example = props => {
  return (
    <div>
      <CardDeck>
        <Card>
          <CardImg
            top
            width="100px"
            height="400px"
            src="https://cms.dailysocial.id/wp-content/uploads/2017/10/27f638af1d5eb720203e19a4e51c3948_go-resto.jpg"
            alt="Card image cap"
          />
          <Button tag={Link} to="/restaurant">
            Button
          </Button>
        </Card>
        <Card>
          <CardImg
            top
            width="100px"
            height="400px"
            src="https://s1.bukalapak.com/img/6053638733/large/gosend_sameday.png"
            alt="Card image cap"
          />
          <Button>Button</Button>
        </Card>
      </CardDeck>
      <br />
      <CardDeck>
        <Card>
          <CardImg
            top
            width="100px"
            height="400px"
            src="https://lelogama.go-jek.com/post_featured_image/go-car-l.jpg"
            alt="Card image cap"
          />
          <Button>Button</Button>
        </Card>
        <Card>
          <CardImg
            top
            width="100px"
            height="400px"
            src="https://cms.dailysocial.id/wp-content/uploads/2019/03/e09ef8ef15db5e4af348cff0c5873ef6_5cc4a0a8254cc196fa21a0d0523b4c70_Gojek.jpg"
            alt="Card image cap"
          />
          <Button>Button</Button>
        </Card>
      </CardDeck>
    </div>
  );
};
export default Example;
