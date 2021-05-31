import React, { useState } from "react";
import "./graph-flow.styles.scss";

import ReactFlow, {
  Controls,
  removeElements,
  addEdge,
} from "react-flow-renderer";
import  MetaData from "../graph-data/data.js";

import NodeComponent from '../node/node.component';
import CartDropDown from '../../components/card-dropdown/card-dropdown.component';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import cardIconComponent from "../../components/card-icon/card-icon.component";



const nodeTypes = {
  special: NodeComponent,
};



const GraphCanvas =({toggleCartHidden,hidden, currentUser})=> {

  
  const [elements, setElements] = useState(MetaData);

  const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (event, element) => {
      toggleCartHidden(!hidden);
      console.log(hidden);
;     //console.log(event.target);
      //console.log(element)
      //console.log(toggleCartHidden.hidden);
      alert(element.id + " Name: "+element.data.label +" - Type: " + element.data.type); };



  //Here is the return rendering
  return (
 
    <div className="demo-display">
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onElementClick={onElementClick}
        //onClick ={toggleCartHidden}
        nodeTypes={nodeTypes}
     
      >
      
      {console.log("logged ->", elements)}
        <>
        <Controls/>
        {
          hidden?
          null
          :
          <CartDropDown />
        }

        </>
      </ReactFlow>
      
    </div>
    
    
  );
 
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}})  => ({
  currentUser,
  hidden
});
const mapDispatchToProps = dispatch =>  ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(GraphCanvas);
