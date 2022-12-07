import './MainItems.css';
import { useState } from "react";
import TeaItem from '/Users/stephanie/Desktop/CS Code 2022/CS1300 UIUX/ResponsiveRedesignUIUX/src/components/TeaItem.js';
import { Col, Row } from 'antd';

// import the images needed
import lemonade from "./assets/images/lemonade.PNG";
import blackCoffee from "./assets/images/blackCoffee.PNG";
import blackTea from "./assets/images/blackTea.PNG";
import brownTea from "./assets/images/brownTea.PNG";
import choccyMilk from "./assets/images/choccyMilk.PNG";
import greenTea from "./assets/images/greenTea.PNG";
import hotChocolate from "./assets/images/hotChocolate.PNG";
import latte from "./assets/images/latte.PNG"
import macchiato from "./assets/images/macchiato.PNG";
import milk from "./assets/images/milk.PNG";
import orangeJuice from "./assets/images/orangeJuice.PNG";
import thai from "./assets/images/thai.PNG";

function MainItems() {
  const itemData =
    [
      {
        "name": "Thai Iced Tea",
        "description": "Syrup-based tea made with whole milk and iced, a tasy treat for a cold day",
        "price": 7.99,
        "image": thai,
        "quantity": 0,
        "type": "tea",
        "caffeine": "yes"
      },
      {
        "name": "Hot Chocolate",
        "description": "Rich dark chocolate made hot with whole milk, topped with whipped cream, cinnamon, and a peppermint stick",
        "price": 4.99,
        "image": hotChocolate,
        "type": "milk",
        "caffeine": "no"
      },
      {
        "name": "Milk",
        "description": "A nice creamy drink served cold. Almond and oat milk available upon request",
        "price": 1.99,
        "image": milk,
        "type": "milk",
        "caffeine": "no"
      },
      {
        "name": "Chocolate Milk",
        "description": "A winter classic served cold for your summer drinking pleasures!",
        "price": 5.99,
        "image": choccyMilk,
        "type": "milk",
        "caffeine": "no"
      },
      {
        "name": "Latte",
        "description": "A hot drink with a sweet taste",
        "price": 4.99,
        "image": latte,
        "type": "coffee",
        "caffeine": "yes"
      },
      {
        "name": "Coffee",
        "description": "Back to basics. Served black, see counter for topping and mix-ins",
        "price": 2.99,
        "image": blackCoffee,
        "type": "coffee",
        "caffeine": "yes"
      },
      {
        "name": "Black Tea",
        "description": "For caffiene lovers and tea lovers alike, a simple black tea to savor",
        "price": 2.99,
        "image": blackTea,
        "type": "tea",
        "caffeine": "yes"
      },
      {
        "name": "Earl Grey",
        "description": "For the tea connoiseurs who prefer less caffiene and a more subdued taste",
        "price": 3.99,
        "image": brownTea,
        "type": "tea",
        "caffeine": "yes"
      },
      {
        "name": "Mint Tea",
        "description": "An herbal blend for a natural sleep",
        "price": 2.99,
        "image": greenTea,
        "type": "tea",
        "caffeine": "no"
      },
      {
        "name": "Lemonade",
        "description": "For the sweet and sour alike",
        "price": 3.99,
        "image": lemonade,
        "type": "juice",
        "caffeine": "no"
      },
      {
        "name": "Iced Macchiato",
        "description": "For the coffee drinkers who prefer a sweet, refreshing taste. Made with rich dark cacao",
        "price": 6.99,
        "image": macchiato,
        "type": "coffee",
        "caffeine": "yes"
      },
      {
        "name": "Orange Juice",
        "description": "Great with any breakfast, no pulp",
        "price": 2.99,
        "image": orangeJuice,
        "type": "juice",
        "caffeine": "no"
      }
    ]

  return (
    <div className="MainItems">
      <div>
        <h1>Tilly's Tea Shop</h1>

        {/* Map tea items from info page to grid */}
        <Row gutter={16}>
          {itemData.map((item, index) => (
            <Col lg={4}>
              <div>
                <TeaItem item={item}></TeaItem>
              </div>
            </Col>
          ))}
        </Row>
      </div>


    </div>
  );
}

export default MainItems;
