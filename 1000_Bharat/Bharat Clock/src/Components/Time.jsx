import { useEffect, useState } from "react";

const Date_Time = () => {
    // let date = new Date();

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval)
        
    },[]);

    return (
        <>
            <p fw-normal fst-italic>So the Date is : <span className="fw-semibold text-primary ">  {currentTime.toLocaleDateString()} </span> and the time is : <span className="fw-semibold text-primary"> {currentTime.toLocaleTimeString()} </span>.</p>


        </>
    )

}
export default Date_Time;