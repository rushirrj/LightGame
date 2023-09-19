import React, { useState, useEffect, useRef } from 'react'

const GreenLightRedLight = ({ data, setData }) => {
    const [style, setStyle] = useState({ backgroundColor: "black" });
    const getColor = useRef(null)
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(40);
    const [flag, setFlag] = useState(false);
    const [lost, setLost] = useState(false);
    const [won,setWon ] = useState(false)
    // FOR SWITCHING THE COLORS
    useEffect(() => {
        let interval;
        if (flag) {
            interval = setInterval(() => {
                if (getColor && getColor.current.style.backgroundColor == "green") {
                    setStyle({ backgroundColor: "red" });
                } else {
                    setStyle({ backgroundColor: "green" });
                }
            }, Math.random() * 1000 + 1000); // Random time between 1 to 2 seconds   
        }

        return () => {
            clearInterval(interval);
        };
    }, [flag]);

    // TO SHOW THE TIMER
    useEffect(() => {
        let newInterval;
        if (flag && timer > 0) {
            newInterval = setInterval(() => {
                setTimer(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
        if (timer === 0) {
            clearInterval(newInterval);
            setFlag(false);
            alert("time up!")
            setTimer(40)
        }
        return () => clearInterval(newInterval);
    }, [timer, flag])


    const handleClick = () => {
        let curr = getColor.current.style.backgroundColor
        if (curr == "green") {
            setCount(count + 1)
            setTimeout(() => {
                if (count == data[0]?.difficulty - 1) {
                    setCount(0)
                    setTimer(40)
                    setLost(false)
                    setWon(true)
                    setFlag(false)
                    return alert("you won")
                }
            }, 100)

        }
        if (curr == "red") {
            setCount(0)
            setTimer(40)
            setFlag(false)
            setLost(true);
            alert("you lost")
        }
    }

    return (
        <div className='h-screen flex flex-col' >
            <div className='shadow-lg h-24  flex px-12 justify-between items-center'>
                <div className='cursor-pointer text-xl font-bold'>🎮GL-RL</div>
                <div> {flag ? (<span className='font-bold'>Only {timer + " "} seconds remaining!</span>) : (<span className='font-bold'>you have 40{" "}seconds</span>)}</div>
            </div>
            {
                flag ? (
                    <>
                        <div className='flex flex-col md:flex-row justify-around mt-4' >
                            <div className='text-center font-bold'>Your Score is{" " + count}</div>
                            <div className='text-center'>Click the Green box : <span className='font-bold'>{data[0].difficulty}</span>  times to win</div>
                        </div>

                        <div className='h-[75vh] flex justify-center items-center'>
                            <div ref={getColor} onClick={handleClick} style={style} className='border shadow-lg rounded-lg flex items-center justify-center border-black h-28 w-28 hover:scale-105 cursor-pointer'>
                                {style.backgroundColor === "black" && <span className='text-white'>Game starting</span>}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {
                            lost ? (
                            <>
                                <div className='h-[74vh] flex justify-center items-center flex-col gap-10'>
                                    <div className='text-2xl'>oops! {"  "}You need to Restart the game</div>
                                    <button className='border border-black p-2  hover:rounded-lg hover:bg-black hover:text-white' onClick={() => { setFlag(true) }}>Restart</button>
                                </div>         
                            </>) : (
                            <> 
                                {won ? (
                                <>
                                <div className='h-[74vh] flex justify-center items-center flex-col gap-10'>
                                    <div className='text-2xl'>Congrats {"  "} <span className='font-bold text-2xl'>{data[0]?.name + " "}</span>🥳🎊🎉!<br/> you won the game</div>
                                    <button className='border border-black p-2  hover:rounded-lg hover:bg-black hover:text-white' onClick={() => { setFlag(true) }}>Play Again</button>
                                </div>                                   
                                </>):(
                                <>
                                <div className='h-[74vh] flex justify-center items-center flex-col gap-10'>
                                    <div className='text-2xl'>Welcome {"  "} <span className='font-bold text-2xl'>{data[0]?.name + " "}</span>🥳🎊🎉</div>
                                    <button className='border border-black p-2  hover:rounded-lg hover:bg-black hover:text-white' onClick={() => { setFlag(true) }}>Start The Game</button>
                                </div>                                 
                                </>)}
                               
                            </>)
                        }
                    </>
                )
            }


        </div>
    )
}

export default GreenLightRedLight