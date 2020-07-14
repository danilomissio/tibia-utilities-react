import React, { useState } from 'react';
import './Container.css'




const Container = () => {

  const [counter, setCounter] = useState<number>(0)


  return (
    <div className="Container">
      <div className="header">Tibia Utilities</div>

      <div className="form">
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Calcular</button>
      </div>
    </div>
  );
}

export default Container

