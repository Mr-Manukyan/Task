import { useState } from "react";
import "./MySelect.css";
import Select from "react-select";
import { useSelector } from "react-redux";
import { getAllEmpolyeesIDs } from "../../../redux/Selectors/Tasks-Selector";

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
	const [currentCountry, setCurrentCountry] = useState();
	const options = useSelector(getAllEmpolyeesIDs)

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
