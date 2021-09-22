import React from 'react'
import "./index.css"


const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{ backgroundColor: colorValue, color: isDarkText ? "#000" : "#FFF" }}
        >
            <div className="squareText">
            <p>{colorValue ? colorValue : 'Empty Value'}</p>
            <p>or in HEX (#)</p>
            <p>{hexValue ? hexValue : null}</p>
            </div>
        </section>
    )
}

Square.defaultProps = {
    colorValue: 'Empty Color Value'
}

export default Square
