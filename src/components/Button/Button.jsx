import React, { useContext } from 'react'
import './Button.css'
import { cardContext } from '../../Store/ContextApi'

function Button() {
    const {Theme, darkTheme, lightTheme} = useContext(cardContext)

    const handlChangeTheme = (e) =>{
    let changingStatus = e.currentTarget.checked
    if(changingStatus){
      darkTheme()
    }else{
      lightTheme()
    }
    }
  return (
   
<label className="switch" >
<input type="checkbox" onChange={ handlChangeTheme} value={Theme} checked={Theme === 'bg-black'} />
  <span className="slider"></span>
</label>
  )
}

export default Button