import React from "react";
import Cards from "./UI/Cards";
import { Box, TextField, styled } from "@mui/material";

const GaveUp = () => {
  const cardsData = [
    { name: "Card 1", percentage: 75, imageSrc: "", id: 1 },
    { name: "Card 2", percentage: 60, imageSrc: "/images/card2.png", id: 2 },
    { name: "Card 3", percentage: 85, imageSrc: "/images/card3.png", id: 3 },
    { name: "Card 4", percentage: 85, imageSrc: "/images/card3.png", id: 4 },
    { name: "Card 5", percentage: 85, imageSrc: "/images/card3.png", id: 5 },
    { name: "Card 6", percentage: 85, imageSrc: "/images/card3.png", id: 6 },
    { name: "Card 7", percentage: 85, imageSrc: "/images/card3.png", id: 7 },
    { name: "Card 8", percentage: 85, imageSrc: "/images/card3.png", id: 8 },
    { name: "Card 9", percentage: 85, imageSrc: "/images/card3.png", id: 9 },
    { name: "Card 10", percentage: 85, imageSrc: "/images/card3.png", id: 10 },
    { name: "Card 11", percentage: 85, imageSrc: "/images/card3.png", id: 11 },
    { name: "Card 12", percentage: 85, imageSrc: "/images/card3.png", id: 12 },
    { name: "Card 13", percentage: 85, imageSrc: "/images/card3.png", id: 13 },
    { name: "Card 14", percentage: 85, imageSrc: "/images/card3.png", id: 14 },
    { name: "Card 15", percentage: 85, imageSrc: "/images/card3.png", id: 15 },
  ];

  return (
    <Wrapper>
      <SearchInput placeholder="Поиск" variant="outlined" />
      <hr />
      <StyledBox>
        {cardsData.map((card) => (
          <StyledContainerCart key={card.id}>
            <Cards
              name={card.name}
              percentage={card.percentage}
              imageSrc={card.imageSrc}
            />
          </StyledContainerCart>
        ))}
      </StyledBox>
    </Wrapper>
  );
};

export default GaveUp;

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  textAlign: "center",
  width: "100%",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    border: "1px solid black",
  },
}));

const SearchInput = styled(TextField)(() => ({
  marginBottom: "20px",
  width: "300px",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "16px",
  padding: "40px 0",
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)", // Изменяем на 2 колонки для мобильного
    padding: "20px 0", // Уменьшаем отступы для мобильного устройства
  },
}));

const StyledContainerCart = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Вертикальный стек
  alignItems: "center", // Центрируем по горизонтали
  justifyContent: "center", // Центрируем по вертикали
  padding: "5px",
  gap: "5px",
  [theme.breakpoints.down("md")]: {
    border: "1px solid black",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%", // Используем всё доступное пространство на мобильных устройствах
  },
}));
