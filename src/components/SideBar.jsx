import React from "react";
import { styled } from "@mui/material";

const SideBar = () => {
  return (
    <Styled>
      <p>Side Bar Content</p>
    </Styled>
  );
};

export default SideBar;

const Styled = styled("div")(({ theme }) => ({
  width: "297px", // Ширина по умолчанию
  height: "100vh",
  background: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "18px",
  transition: "width 0.3s ease",
  [theme.breakpoints.down("lg")]: {
    width: "200px", // Уменьшенная ширина для больших мобильных экранов
  },
  [theme.breakpoints.down("md")]: {
    width: "150px", // Уменьшенная ширина для средних экранов
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px", // Уменьшенная ширина для маленьких экранов
    fontSize: "14px", // Уменьшенный размер шрифта для маленьких экранов
  },
  [theme.breakpoints.down("xs")]: {
    width: "80px", // Еще меньшая ширина для очень маленьких экранов
    fontSize: "12px", // Еще меньший размер шрифта для очень маленьких экранов
  },
}));
