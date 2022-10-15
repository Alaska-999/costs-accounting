import './CostItem.css'
import CostDate from "./CostDate/CostDate";
import Card from "../../UI/Card";

const CostItem = (props) => {

    return (
        <li>
            <Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <div><h2>{props.description}</h2></div>
                    <div className='cost-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default CostItem;