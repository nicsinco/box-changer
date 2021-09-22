import "./index.css"
import colorNames from "colornames"

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <div className="inputType">
        <form onSubmit={ (e) => e.preventDefault() }>
        <input
            autoFocus
            type="text"
            placeholder='Enter color Here'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
        </form>
        <button 
            className="buttonToggle"
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
        >Toggle Text Color</button>
        </div>
    )
}

export default Input
