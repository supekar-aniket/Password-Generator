import React from 'react'
import './App.css';
import { useState } from 'react';

import { lowerCaseChar, numbersChar, symbolChar, upperCaseChar } from './Data/passChar';


export function PasswordGenerator() {

  let [upperCase,setUpperCase] = useState(false);
  let [lowerCase,setLowerCase] = useState(false);
  let [symbols,setSymbol] = useState(false);
  let [numbers,SetNumbers] = useState(false);

  let [passLength,setPassLength] = useState(4);

  let [finalPass,setFinalPass] = useState('');

  const createPassword = () => {

    let charSet = '';
    let finalPassword = '';

    if(upperCase || lowerCase || symbols || numbers){

      if(upperCase) charSet += upperCaseChar;
      if(lowerCase) charSet += lowerCaseChar;
      if(numbers) charSet += numbersChar;
      if(symbols) charSet += symbolChar;

      for(let i=0; i<passLength; i++){
        finalPassword += charSet.charAt(Math.floor(Math.random()*charSet.length));
      }

      setFinalPass(finalPassword);

    } else {
      alert(`Select at least One Checkbox...`);
    }
  }


  const copyPassword = () => {

    // for copy password from input box
    navigator.clipboard.writeText(finalPass);
  }

  return (
    <div className="passwordGenerator">
      <h2>Password Generator</h2>
      <div className='passwordBox'>
        <input type='text' value={finalPass} readOnly/> <button onClick={copyPassword}>Copy</button>
      </div>
      <div className='passLengthDiv'>
        <label>Password Length</label>
        <input type='number' min={4} max={20} value={passLength} onChange={(event)=>setPassLength(event.target.value)}/>
      </div>
      <div className='passLengthDiv'>
        <label>Include Uppercase  Letters</label>
        <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
      </div>
      <div className='passLengthDiv'>
        <label>Include Lowercase Letters</label>
        <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>
      </div>
      <div className='passLengthDiv'>
        <label>Include Numbers</label>
        <input type='checkbox' checked={numbers} onChange={()=>SetNumbers(!numbers)}/>
      </div>
      <div className='passLengthDiv'>
        <label>Include Symbols</label>
        <input type='checkbox' checked={symbols} onChange={()=>setSymbol(!symbols)}/>
      </div>  
      <button className='btn' onClick={createPassword}>Generate Password</button>
    </div>
  )
}
