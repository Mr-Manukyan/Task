import { useState } from "react";
import "./MySelect.css";
import Select from "react-select";
import { useSelector } from "react-redux";
import { getAllEmpolyeesFullName } from "../../../redux/Selectors/Tasks-Selector";



export const MySelect = ({ setImployeID, currentEmployeFullName = '' }) => {
	const [currentEmploye, setCurrentEmploe] = useState(currentEmployeFullName);
	const options = useSelector(getAllEmpolyeesFullName)

	const getValue = () => {
		return currentEmploye
			? options.find((c) => c.value === currentEmploye)
			: "";
	};

	const onChange = (newValue) => {
		setCurrentEmploe(newValue.value);
		setImployeID(newValue.id)
	};

	return (
		<div className="container">
			<h4 className="paragraph">Chose Employe</h4>
			<Select
				classNamePrefix="custom-select"
				onChange={onChange}
				value={getValue()}
				options={options}

			/>
		</div>
	);
};
