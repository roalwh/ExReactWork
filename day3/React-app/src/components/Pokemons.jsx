import React from "react";

function Pokemons() {
    return (
        <div className="container">
            <h1> Pokemon</h1>
            {/* 상품목록 만들기 */}
            <div className="pokemon-list">
                <div className="item">
                    <img src="000101.png" alt="이상해씨" />
                </div>
                <div className="item">
                    <img src="000401.png" alt="파이리" />
                </div>
                <div className="item">
                    <img src="000701.png" alt="꼬부기" />
                </div>

            </div>
        </div>
    )
}
export default Pokemons;