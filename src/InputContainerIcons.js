import React from 'react'
import "./inputContainerIcons.css"
export default function InputContainerIcons({icons,name,color}) {
  return (
      <div className='inputContainerIcons'>
          <div className="icon_img">
              <img src={icons} alt="" />
          </div>
          <div className="icon_name">
              {name}
          </div>
    </div>
  )
}
