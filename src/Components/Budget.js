import React, {useContext,useState} from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import {AppContext} from '../Context/AppContext';
import bud from './Image/bud.png'

const Budget = () => {
    const {budget,dispatch}=useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div className="alert alert-light box">
            <img src={bud} alt="img"/><br/>
			<div class='p-3 d-flex align-items-center justify-content-between'>
				{isEditing ? (
					<EditBudget handleSaveClick={handleSaveClick} budget={budget}/>
				) : (
					// For part 1 render component inline rather than create a seperate one
					<ViewBudget handleEditClick={handleEditClick} budget={budget} />
				)}
			</div>
		</div>
    )
}

export default Budget;