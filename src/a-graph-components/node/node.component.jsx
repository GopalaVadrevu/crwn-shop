import React from 'react';
import  { Handle } from 'react-flow-renderer';
import './node.styles.scss'




const NodeComponent = ({ data}) => {
  return (
    < >
    
      <div ></div>

      <Handle
      type="source"
      position="right"
      id="a"
      style={{ top: '30%', borderRadius: 0 }}
    />
    <Handle
      type="source"
      position="bottom"
      id="b"
      style={{ top: '70%', borderRadius: 0 }}
    />

    </>
  );
};



export default NodeComponent;
