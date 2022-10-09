import React, { useEffect ,  useState } from 'react';

import pauseDesktop from "../assets/pattern-divider-desktop.svg";
import pauseMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";

const AdviceOfTheDay = () => {
    const [text, setText] = useState([])

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  }
  
  useEffect(() => {
    fetchAdvice()
  }, [])
  
    return (
        <>
        
            <div className="container">    
                <h1>Advice # {text.id}</h1>
                <p>
                    {text.advice}
                </p>
                <picture>
                    <source media="(min-width: 768px)" srcset={pauseDesktop} type="image/" />
                    <img src={pauseMobile} alt="" />
                </picture>
                <div>
                    <button onClick={fetchAdvice}>
                        <img src={dice} alt="" />
                    </button>           
                </div>
            </div>
        </>
    );
};

export default AdviceOfTheDay;