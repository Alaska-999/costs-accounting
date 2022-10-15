import React, {useState} from 'react';
import CostForm from "./NewCostForm/CostForm";
import './NewCost.css'

const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
        setIsFormVisible(false)
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)

    }

    return (
        <div className='new-cost'>
            {(isFormVisible) ?
                (<CostForm onSaveCostData={saveCostDataHandler}
                           onCancel={cancelCostHandler}/>
                ) : (
                    <button onClick={inputCostDataHandler}>Add New Cost</button>)
            }
        </div>
    );
};

export default NewCost;