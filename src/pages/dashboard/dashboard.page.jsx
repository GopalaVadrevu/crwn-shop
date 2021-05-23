import React from 'react';
import './dashboard.style.scss';
import GraphCanvas from '../../a-graph-components/graph-flow/graph_flow.component';
import SelectionContainer from '../../a-graph-components/selectiontab/selection-tab.component';


const DashBoard =({props}) => {

    return(
    <div className="dashboard">
        <div className="canvas-container">
            <div className="canvas-graph"> <GraphCanvas /> </div>
            <div className="canvas-selection"> <SelectionContainer /></div>
        </div>
        <div className="summary-container"><span className="title">Summary Count</span></div>   
    </div>

    )


};

export default DashBoard;


