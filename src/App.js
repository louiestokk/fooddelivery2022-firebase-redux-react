import React, { useEffect, useState } from "react";
import {
  AccountBalanceRounded,
  ChatRounded,
  Favorite,
  HomeRounded,
  Settings,
  Summarize,
  SummarizeRounded,
} from "@mui/icons-material";
import "./App.css";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import BannerName from "./components/BannerName";
import SubMenu from "./components/SubMenu";
import MenuCard from "./components/MenuCard";
import image from "./components/images/meny1.jpg";
import { MenuItems, Items } from "./components/Data";
import ItemCard from "./components/ItemCard";
function App() {
  const [mainData, setMainData] = useState(
    Items.filter((el) => el.itemId === "buger01")
  );
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    const setMenuActive = (e) => {
      menuLi.forEach((el) => el.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };
    menuLi.forEach((el) => el.addEventListener("click", setMenuActive));
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    const setMenuCardActive = (e) => {
      menuCards.forEach((el) => el.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };
    menuCards.forEach((el) => el.addEventListener("click", setMenuCardActive));
  }, [mainData]);
  return (
    <div className="App">
      <Header />
      <main className="">
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Louie"} discount={"20"} link={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt="delivery"
              className="deliveryPic"
            />
          </div>
        </div>
        <div className="dishContainer">
          <div className="menuCard">
            <SubMenu name={"Menu Category"} />
          </div>
          <div className="rowContainer">
            {MenuItems?.map((item) => (
              <div key={item.id}>
                <MenuCard
                  imgSrc={item.imgSrc}
                  name={item.name}
                  isActive={item.id === 1 ? true : false}
                />
              </div>
            ))}
          </div>
          <div className="dishItemContainer">
            {mainData?.map((el) => (
              <ItemCard
                key={el.id}
                imgSrc={el.imgSrc}
                name={el.name}
                ratings={el.rating}
                price={el.price}
              />
            ))}
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-igonre */}
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          {/* prettier-igonre */}
          <MenuContainer link={"#"} icon={<ChatRounded />} />
          {/* prettier-igonre */}
          <MenuContainer link={"#"} icon={<AccountBalanceRounded />} />
          {/* prettier-igonre */}
          <MenuContainer link={"#"} icon={<Favorite />} />
          {/* prettier-igonre */}
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          {/* prettier-igonre */}
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
