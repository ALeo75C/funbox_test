import React from "react";
import "./App.scss";
import Card from "./card.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: [],
      products: [
        {
          title: "с фуа-гра",
          count: 10,
          present: 1,
          weight: "0,5",
          taste: "Печень утки разварная с артишоками.",
          inStock: true,
        },
        {
          title: "с рыбой",
          count: 40,
          present: 2,
          weight: "2",
          taste: "Головы щучьи с чесноком да свежайшая сёмгушка.",
          inStock: true,
        },
        {
          title: "с курой",
          count: 100,
          present: 5,
          weight: "5",
          taste: "Филе из цыплят с трюфелями в бульоне.",
          inStock: false,
        },
      ],
    };
  }

  choiceProduct = (productId) => {
    if (this.state.products[productId].inStock) {
      const newState = new Object(this.state);
      const selected = newState.selected;
      if (undefined === selected.find((id) => id === productId)) {
        selected.push(productId);
      } else {
        const id = selected.findIndex((i) => i === productId);
        selected.splice(id, 1);
      }
      newState.selected = selected;
      this.setState(newState);
    }
  };

  renderCards = () => {
    let cardsItems = [];
    const products = this.state.products;
    products.forEach((product, i) => {
      const isSelected = this.state.selected.find((id) => id === i);
      const isActive = isSelected || isSelected === 0 ? true : false;
      cardsItems.push(
        <Card
          id={i}
          key={i}
          isActive={isActive}
          title={product.title}
          count={product.count}
          present={product.present}
          weight={product.weight}
          taste={product.taste}
          inStock={product.inStock}
          onClick={this.choiceProduct}
        />
      );
    });

    return cardsItems;
  };

  render() {
    return (
      <div className="App">
        <h1>Ты сегодня покормил кота?</h1>
        <div className="cardsCollection">{this.renderCards()}</div>
      </div>
    );
  }
}
