import { ChevronRightRounded } from "@mui/icons-material";
import { width } from "@mui/system";
import React from "react";

const SubMenu = ({ name }) => {
  return (
    <div className="subMenuContianer">
      <h3>{name}</h3>
      <div className="viewAll">
        <p>View All</p>
        <>
          <ChevronRightRounded
            style={{
              background: "#f8901c",
              color: "white",
              borderRadius: "50%",
              margin: "0 .5rem",
              height: "15px",
              width: "15px",
            }}
          />
        </>
      </div>
    </div>
  );
};

export default SubMenu;
