import React, { Component } from "react";
import Counter from "./counter";
import { Row, Col } from "reactstrap";
export default class Halaman1 extends Component {
  state = {
    food: [
      {
        id: 1,
        number: 0,
        price: 20000,
        nama: "Paket Ayam 1",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 2,
        price: 25000,
        number: 0,
        nama: "Paket Ayam 2",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 3,
        price: 30000,
        number: 0,
        nama: "Paket Ayam 3",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 4,
        price: 35000,
        number: 0,
        nama: "Paket Ayam 4",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      }
    ],
    jumlah: 0,
    total: 0
  };

  plus = (biaya, price) => {
    this.setState({
      jumlah: this.state.jumlah + biaya
      // total: this.state.total + price
    });
  };
  minus = (biaya, price) => {
    this.setState({
      jumlah: this.state.jumlah - biaya
      // total: this.state.total - price
    });
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.food.map((item, index) => (
            <Col xs="3">
              <Counter
                plus={this.plus}
                minus={this.minus}
                gambar={item.gambar}
                indexMakanan={index}
                name={item.nama}
                biaya={item.price}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
