import React, { useState } from "react";
import "./graph-flow.styles.scss";

import ReactFlow, {
  Controls,
  removeElements,
  addEdge,
} from "react-flow-renderer";
import  MetaData from "../graph-data/data.js";

import NodeComponent from '../node/node.component';


const nodeTypes = {
  special: NodeComponent,
};

const GraphCanvas =()=> {

  const [elements, setElements] = useState(MetaData);

  const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (event, element) => {
     
      console.log(event.target);
      console.log(element)
      alert(element.id + " Name: "+element.data.label +" - Type: " + element.data.type); };



  //Here is the return rendering
  return (
    <div className="demo-display">
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onElementClick={onElementClick}
        nodeTypes={nodeTypes}
     
      >
      
      {console.log("logged ->", elements)}

        <Controls/>
      </ReactFlow>
    </div>
  );
 
};

export default GraphCanvas;
