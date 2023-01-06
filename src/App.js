import "./App.css";
import Card from "./components/Card/Card";
import burger from "./assets/Image/hamburger.png";
import sib from "./assets/Image/french_fries.png";
import salad from "./assets/Image/salad.png";
import soda from "./assets/Image/soda.png";
import { useState } from "react";
import tick from "./assets/Image/tick.png";

const foods = [
  {
    title: "همبرگر معمولی",
    price: 8000,
    id: "burger",
    imgSrc: burger,
  },
  {
    title: "همبرگر مخصوص",
    price: 10000,
    id: "specialBurger",
    imgSrc: burger,
  },
  {
    title: "همبرگر معمولی با قارچ و پنیر",
    price: 12000,
    id: "cheeseburger",
    imgSrc: burger,
  },
  {
    title: "همبرگر مخصوص با قارچ و پنیر",
    price: 14000,
    id: "cheeseSpecialburger",
    imgSrc: burger,
  },
  {
    title: "سیب زمینی سرخ کرده ویژه",
    price: 14000,
    id: "specialPotato",
    imgSrc: sib,
  },
  {
    title: "سیب زمینی سرخ کرده",
    price: 10000,
    id: "Potato",
    imgSrc: sib,
  },
  {
    title: "سالاد فصل",
    price: 4000,
    id: "salad",
    imgSrc: salad,
  },
  {
    title: "نوشابه",
    price: 4000,
    id: "soda",
    imgSrc: soda,
  },
];

function App() {
  const [total, setTotal] = useState(0);
  function billing(value) {
    setTotal(total + value);
  }
  return (
    <>
      <div className={"container"}>
        <div className={"leftBox"}>
          <div className="text">
            <label>جمع کل سفارشات:</label>
            <span>{total} تومان</span>
          </div>
          <div className="text">
            <label>حق سرویس و کارمزد:</label>
            <span>0 تومان</span>
          </div>
          <div className="text">
            <label>تخفیف:</label>
            <span>0 درصد</span>
          </div>
          <div className="Discount">
            <input type="text" placeholder={"کد تخفیف"}></input>
            <div></div>
          </div>
          <div className="totalPrice text">
            <label>مبلغ قابل پرداخت:</label>
            <span>0 تومان</span>
          </div>
          <div typeof="submit" className="subBtn">
            ثبت سفارش
          </div>
        </div>
        <div className={"rightBox"}>
          <footer className="footer-box">رستوران مک دونالد شعبه تهران</footer>
          <div id="foodContainer">
            {foods.map((food) => {
              return (
                <Card
                  id={food.id}
                  title={food.title}
                  price={food.price}
                  imgSrc={food.imgSrc}
                  totalPrice={billing}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
