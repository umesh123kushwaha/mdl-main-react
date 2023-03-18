import React, { useState } from 'react'

const Clock = () => {
    const getClockTime = () => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var y = today.getFullYear();
        var d = today.getDate();
        var month = today.toLocaleString('default', { month: 'long' });
        var day = weekday[today.getDay()]
        // var day = today.toLocaleString('default', { day: 'long' });
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        // var session = "AM" 
        //     if(h>12){
        //         h = h - 12;
        //         h= checkTime(h);
                
        //         session = "PM"
        //     }
       
        return h + ":" + m + ":" + s + " " + " GMT " + day + ", " + month + " " + d + ", " + y;
    
            
        
    }
  
    let time =getClockTime();
    const[currTime, setCurrTime] = useState(time);

    const UpdateTime = () => {
        let time2 =getClockTime();
        setCurrTime(time2);
    };
    setInterval(UpdateTime,1000);

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

   
    
 






    return (
    <div>
        {currTime}

    </div>
  )
    }


export default Clock