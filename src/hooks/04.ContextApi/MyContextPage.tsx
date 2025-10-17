import { useContext } from "react"
import { MyThemedButton } from "./MyThemedButton"
import { ThemeContext } from "./ThemeContext"


export const MyContextPage = () => {
    const { nextTheme, isLightTheme } = useContext(ThemeContext)

    const next = () => {
        nextTheme()
    }

    return (
        <div>
            <div>
                <label>Is Light Theme: {isLightTheme.toString()}</label>
            </div>
            <div>
                <MyThemedButton label='Change Theme' variant='primary' onClick={next} />
            </div>
        </div>
    )
}