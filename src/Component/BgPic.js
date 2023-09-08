import React from 'react'
import image from '../Logo/bg.jpg'
function BgPic() {
    const background={
        width:'700px',
        height:'300px',

    }
  return (
    <div>
     <img style={background} src={image} />
    </div>
  )
}

export default BgPic