import React from "react";
import "./selection-tab.styles.scss";



class SelectionContainer extends React.Component {
  render() {
    return (
      <div>
        <label className='title'>Selection Tab</label>
        <div>First Selection: Value 1</div>
        <div>Second Selection: Value 2</div>
        <div>Third Selection: Value 3</div>
        <div>Fourth Selection : Value 4</div>
      </div>
    );
  }
}

export default SelectionContainer;
