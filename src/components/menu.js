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
        total: 0,
        nama: "Paket Ayam 1",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 2,
        price: 25000,
        number: 0,
        total: 0,
        nama: "Paket Ayam 2",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 3,
        price: 30000,
        number: 0,
        total: 0,
        nama: "Paket Ayam 3",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      },
      {
        id: 4,
        price: 35000,
        number: 0,
        total: 0,
        nama: "Paket Ayam 4",
        gambar: "https://mcdonalds.co.id/uploads/KII68tTAXvubUBv5WAqM.png"
      }
    ],
    jumlah: 0
  };

  plus = id => {
    var food = this.state.food;
    var order = food.find(item => item.id === id);
    console.log(order);
    var mystate = (order.total = order.total + order.price);
    this.setState({
      "order.total": mystate
    });
  };
  minus = id => {
    var food = this.state.food;
    var order = food.find(item => item.id === id);
    console.log(order);
    var mystate = (order.total = order.total - order.price);
    this.setState({
      "order.total": mystate
    });
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.food.map((item, index) => (
            <Col-md-3>
              <Counter
                plus={() => this.plus(item.id)}
                minus={() => this.minus(item.id)}
                gambar={item.gambar}
                indexMakanan={index}
                name={item.nama}
                jumlah={item.total}
                biaya={item.price}
              />
            </Col-md-3>
          ))}
        </Row>
      </div>
    );
  }
}
