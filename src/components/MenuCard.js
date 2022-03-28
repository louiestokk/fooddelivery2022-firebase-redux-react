import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

const MenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <div className={isActive ? "rowMenuCard active" : "rowMenuCard"}>
      <div className="imgBox">
        <img src={imgSrc} alt={name} />
      </div>
      <h3>{name}</h3>
      <div className="loadMenu">
        <ChevronRightRounded />
      </div>
    </div>
  );
};

export default MenuCard;
