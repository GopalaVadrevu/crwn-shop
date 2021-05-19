import React from 'react';
import Card from "../grid/card";
import { v4 as uuidv4 } from "uuid"
//import dashboards from './dashboard.js';
import './grid.styles.scss';


const dashboards = [
    
    "https://prod-apnortheast-a.online.tableau.com/t/tabreacttest/authoring/NonprofitCaseManagement/Intake/Inbound%20Referrals#1",
  
]
export default function Grid() {
    return (
      <div className='grid-style'>
        {dashboards.map(dashboard => (
          <Card key={uuidv4()}  width='1400px' height='900px' value={dashboard} />
        ))}
      </div>
    )
  }

  //<Card key={dashboard[0]}  dashboard={dashboard[1]} />