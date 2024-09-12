import React, { useState } from "react";
import GaveUp from "./components/GaveUp";
import SideBar from "./components/SideBar";
import { styled } from "@mui/material";

const App = () => {
	return (
		<StyledBox>
			{/* <SideBar /> */}
			<GaveUp />
		</StyledBox>
	);
	ы;
};

export default App;

const StyledBox = styled("div")(() => ({
	display: "flex",
	margin: "0 auto",
	transition: "margin-left 0.3s",
	maxWidth: "1440px",
}));
