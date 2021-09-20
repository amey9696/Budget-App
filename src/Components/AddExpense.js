import React, { useState, useContext,useEffect } from 'react'
import { AppContext } from '../Context/AppContext';

const getLocalItems=()=>{
    let list=localStorage.getItem('lists');
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }
    else{
        return [];
    }
}

const AddExpense = () => {
    const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [items,setItems]=useState(getLocalItems());
	

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: new Date().getTime().toString(),
			name:name,
			// cost: parseInt(cost),
			cost:cost,
		};
		// console.log(expense);

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
		
		setItems([expense]);
		setName('');
		setCost('');
	};

	// console.log(items);
	useEffect(()=>{
		localStorage.setItem('lists',JSON.stringify(items))
	},[items]);

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpense;