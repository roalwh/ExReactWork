import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <div>
                {/* 기존 페이지 새로고침 호출 */}
                <span><a href="/">Home</a> </span> 
                <span><a href="about">about</a> </span> 
                {/* 페이지 새로고침 안함 */}
                <span><Link to='/'>Home</Link> </span>
                <span><Link to='/about'>about</Link></span>
            </div>
            <hr></hr>
        </nav>

    )
}
