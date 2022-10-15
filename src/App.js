import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: 'Fridge',
        amount: 999
    },
    {
        id: 'c2',
        date: new Date(2021, 5, 22),
        description: 'Laptop',
        amount: 1200
    },
    {
        id: 'c3',
        date: new Date(2021, 11, 4),
        description: 'Backpack',
        amount: 245
    }
]


function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS)
    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    }

    return (
       <div>
           <NewCost onAddCost={addCostHandler}/>
           <Costs costs={costs} />
       </div>
    );
}

export default App;
