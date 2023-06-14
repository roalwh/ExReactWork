import React from 'react'

function Foods(props) {
    console.log(props)
    
    return (
    <ul>{props.children}</ul>
  )
}
export default Foods;