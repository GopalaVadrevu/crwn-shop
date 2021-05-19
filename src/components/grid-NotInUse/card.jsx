import React from 'react';
import { useRef, useEffect } from "react";
import './grid.styles.scss';

const { tableau } = window

export default function Card({ value,width, height }) {



    const ref = useRef(null)


  
    useEffect(() => {
      const viz = new tableau.Viz(ref.current, `${value}`, {
        hideTabs: false,
        hideToolbar: false,
        width: `${width}`,
        height: `${height}`,
      })
  
      return viz;
    })

  
    return (
      <div clasName="card-style" ref={ref} />
    )
  }
    


