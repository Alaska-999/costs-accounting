import './Costs.css'
import Card from "../UI/Card";
import CostFilter from "./CostsFilter/CostsFilter";
import {useState} from "react";
import CostsList from "./CostsList/CostsList";
import CostsDiagram from "./CostsDiagram/CostsDiagram";

const Costs = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021')
    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(cost => {
          return cost.date.getFullYear().toString() === selectedYear
    })

    return (
        <div>
        <Card className='costs'>
            <CostFilter year={selectedYear}
                        onChangeYear = {yearChangeHandler}/>
            <CostsDiagram costs = {filteredCosts}/>
            <CostsList costs = {filteredCosts}/>
        </Card>
        </div>
    );
};

export default Costs;