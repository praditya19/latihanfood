import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Navbar,
  CardFooter,
  CardHeader,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Counter extends Component {
  state = {
    barang: 0
  };

  tambah = () => {
    this.setState({
      barang: this.state.barang + 1
    });
    this.props.plus();
  };
  kurang = () => {
    if (this.state.barang === 0) {
      return;
    }
    this.setState({
      barang: this.state.barang - 1
    });
    this.props.minus();
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <Card>
          <CardHeader>
            <CardImg top width="100%" src={this.props.gambar} alt="Card" />
          </CardHeader>
          <CardBody>
            <CardTitle> {this.props.name}</CardTitle>
            <CardText>
              <p>biaya: {this.props.biaya}</p>
            </CardText>
            <Navbar>
              <Button onClick={this.tambah} size="lg" color="success">
                Plus
              </Button>{" "}
              <h1>{this.state.barang} </h1>
              <Button
                onClick={this.kurang}
                size="lg"
                className="btn btn-danger m-2"
              >
                Minus
              </Button>
            </Navbar>
          </CardBody>
          <CardFooter>total : {this.props.jumlah}</CardFooter>
          <Button tag={Link} to="/pembayaran">
            pesan sekarang
          </Button>
        </Card>
      </div>
    );
  }
}
