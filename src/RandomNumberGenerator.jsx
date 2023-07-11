import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [randomWord, setRandomWord] = useState(null);
  const [previousWord, setPreviousWord] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomPresent, setRandomPresent] = useState(null);
  const [previousPresent, setPreviousPresent] = useState(null);

  const presentArray = ["one catte", "I steal u", "I steal your foot", "I eat your snacks", "I kiss u","I kiss u 200 times", "I make u coffe", "I kiss your cheek"]

  const generateRandomPresent = () => {
    let newRandomPresent = presentArray[Math.floor(Math.random() * presentArray.length)];

    // Generate a new present until it is different from the previous present
    while (newRandomPresent === previousPresent) {
      newRandomPresent = presentArray[Math.floor(Math.random() * presentArray.length)];
    }

    setPreviousPresent(randomPresent);
    setRandomPresent(newRandomPresent);
  }


  const wordArray = ["Idiot!", "Abibas", "Pineapple", "Banana", "Cacahuette", "Baka Baka", "Chemchkin"];

  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    const word = wordArray[randomIndex];
    setRandomWord(word);
  };

  const generateRandomNumber = () => {
    const min = 1; // Minimum value (1 million / 1 million)
    const max = 100; // Maximum value (100 million / 1 million)
    const randomMultiplier = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = Math.round(randomMultiplier * 1000000);
    setRandomNumber(randomNumber);
  };

  return (
    <div>
      <h1>Today's Stats</h1>
      <hr/>
      <p>What Kind Of Baka Are You Today?</p>
      <button onClick={generateRandomWord}>Baka</button>
      {randomWord && <h2>Baka {randomWord}</h2>}
      <hr/>
      <p>How Much Do I Love You Today?</p>
      <button onClick={generateRandomNumber}>Find Out</button>
      {randomNumber && <h2>{randomNumber.toLocaleString()} million (quite a lot)</h2>}
      <hr/>
      <p>My Gift For You Today</p>
      <button onClick ={generateRandomPresent}>Surprise</button>
      {randomPresent && <h2>{randomPresent}</h2>}
    </div>
  );
}

export default RandomNumberGenerator;
