import React from "react";
import { Card, Typography, styled, Avatar } from "@mui/material";

const Cards = ({ name, percentage, imageSrc }) => {
	return (
		<StyledCard>
			<StyledAvatar alt={name} src={imageSrc} />
			<Typography variant="h6">{name}</Typography>
			<PercentageText>{percentage}%</PercentageText>
		</StyledCard>
	);
};

export default Cards;

const StyledCard = styled(Card)(({ theme }) => ({
	width: "190px", // Ширина по умолчанию
	height: "230px", // Высота по умолчанию
	background:
		"linear-gradient(180deg, #F8F7FD 0%, #AFDBC4 49.49%, #BDC0EB 100%)",
	borderRadius: "43px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	[theme.breakpoints.down("sm")]: {
		width: "180px", // Уменьшенная ширина для мобильных экранов
		height: "220px", // Уменьшенная высота для мобильных экранов
	},
	[theme.breakpoints.down("xs")]: {
		width: "160px", // Еще меньше ширина для очень маленьких экранов
		height: "200px", // Еще меньше высота для очень маленьких экранов
	},
}));

const StyledAvatar = styled(Avatar)(() => ({
	width: "56px",
	height: "56px",
	marginBottom: "10px",
}));

const PercentageText = styled(Typography)(() => ({
	fontSize: "24px",
	fontWeight: "bold",
	marginTop: "10px",
}));
