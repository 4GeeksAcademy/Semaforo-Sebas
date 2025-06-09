import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor] = useState ("rojo")
	return (
		<div className="semaforo">
			<div 
			onClick={() => setSelectedColor ("rojo")} 
			className={"luz rojo" + (selectedColor === "rojo" ? " activo" : "")}>
			</div>

			<div 
			onClick={() => setSelectedColor ("amarillo")} 
			className={"luz amarillo" + (selectedColor === "amarillo" ? " activo" : "")}>
			</div>

			<div 
			onClick={() => setSelectedColor ("verde")} 
			className={"luz verde" + (selectedColor === "verde" ? " activo" : "")}>
			</div>
		</div>
		
	);
};

export default Home;