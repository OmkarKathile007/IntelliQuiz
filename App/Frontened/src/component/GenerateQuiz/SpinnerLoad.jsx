import React, { useEffect } from 'react'

const SpinnerLoad = () => {


//    const [text,setText]=useEffect('');
   const [text,setText]=useEffect('');
    const [showImg,setShowImg]=useEffect(true);

   useEffect(()=>{
    setTimeout(()=>{
        setShowImg(false);
        setText(
            'Loader is Loading Please wait'
        )
    },3000)
   },[])

  return (
    <div>
        {
          showImg?(
            <img src="../../assets/Spin@1x-1.0s-200px-200px.gif" alt="" />
          ):
          (
            <h3>{text} Loader is Loadiing Please Wait</h3>
          )
        }

    </div>
  )
}

export default SpinnerLoad