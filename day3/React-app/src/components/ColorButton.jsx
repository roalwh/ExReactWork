import React from 'react'



function ColorButton(props) {
    console.log(props);
    // 분할 대입
    const {backcolor,setcolor} = props;
    return (
        <button style={{
            backgroundColor: backcolor,
            color: setcolor,
            margin: "10px",
        }} >
            {props.children}</button>
    )
}
export default ColorButton;