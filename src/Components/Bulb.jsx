import React, { useState }  from 'react';
import offImg from '../Images/pic_bulboff.gif'
import onImg from '../Images/pic_bulbon.gif'

const Bulb = () => {

const [initial , setinitial] = useState(offImg);
const [val , setVal]= useState("ON");

// console.log(val);

    const onBTn = () => {
        
        if(initial == offImg && val == "ON") {
            setinitial(onImg)
            setVal("OFF")
        }

        else{
           setinitial(offImg)
           setVal("ON")
        }
    }


  return (
    <div className='mainDiv'>
    <div className='bulbImgDiv'>
        <img src={initial} alt="" />    
    </div>
    <div className="btnDiv">
        <button onClick={onBTn}>{val}</button>
    </div>
    </div>
  )
}

export default Bulb
