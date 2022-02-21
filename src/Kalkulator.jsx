import React, { useState } from 'react';

export default function Kalkulator() {
  const [currentVal, setCurrentVal] = useState('0');
  const [prevVal, setPrevVal] = useState('0');
  const [formula, setFormula] = useState('');
  const [currentSign, setCurrentSign] = useState('pos');
  const [lastClicked, setLastClicked] = useState('');
  const [evaluated, setEvaluated] = useState(false);

  function handleOperators() {
    //code
  }

  function handleEvaluate() {
    //code
  }

  function handleDecimal() {
    //code
  }

  function handleNumbers() {
    //code
  }

  // AC Button
  function initialize() {
    setCurrentVal('0');
    setPrevVal('0');
    setFormula('');
    setCurrentSign('pos');
    setLastClicked('');
    setEvaluated(false);
  }

  return (
    <div>
      <h1>Setup</h1>
    </div>
  );
}
