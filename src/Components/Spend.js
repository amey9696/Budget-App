import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import expanse from './Image/expanse.png'

const Spend = () => {
    const {expenses}=useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

    return (
        <>
            <div className="alert alert-light box">
                 <img src={expanse} alt="img"/><br/>
                <span className="span">Expenses:&#8377;{total}</span>
             </div>  

        </>
    )
}

export default Spend;