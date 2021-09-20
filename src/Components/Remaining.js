import React,{useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import rs from './Image/rs.png'

const Remaining = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-light';

	return (
		<div class={`box alert p-4 ${alertType}`}>
            <img src={rs} alt="img"/><br/>
			<span className="span">Balance: &#8377;{budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;