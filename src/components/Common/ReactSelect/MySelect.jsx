import { useState } from "react";
import "./MySelect.css";
import Select from "react-select";

const options = [
	{
		value: "germany",
		label: "Germany"
	},
	{
		value: "canada",
		label: "Canada"
	},
];

export const MySelect = () => {
	const [currentCountry, setCurrentCountry] = useState("south-korea");

	const getValue = () => {
		return currentCountry
			? options.find((c) => c.value === currentCountry)
			: "";
	};

	const onChange = (newValue) => {
		setCurrentCountry(newValue.value);
	};

	return (
		<div className="container">
			<h4 className="paragraph">Chose Employe ID:</h4>
			<Select
				classNamePrefix="custom-select"
				onChange={onChange}
				value={getValue()}
				options={options}
			/>
		</div>
	);
};
