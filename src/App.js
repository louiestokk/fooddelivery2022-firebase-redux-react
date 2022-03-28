import React, { useEffect } from "react";
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
function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    const setMenuActive = (e) => {
      menuLi.forEach((el) => el.classList.remove("active"));
      e.currentTarget.classList.add("active");
    };
    menuLi.forEach((el) => el.addEventListener("click", setMenuActive));
  }, []);
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
            <div>
              <MenuCard imgSrc={image} name={"Burger"} isActive />
            </div>
            <div>
              <MenuCard imgSrc={image} name={"Burger"} />
            </div>
          </div>
          <div className="dishitemContainer"></div>
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
