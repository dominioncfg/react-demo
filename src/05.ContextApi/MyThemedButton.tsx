import { use } from "react";
import { ThemeContext } from "./ThemeContext";

interface MyThemedButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}

export const MyThemedButton = ({
    label,
    onClick,
    variant = "primary",
    disabled = false,
}: MyThemedButtonProps
) => {

    //use() is the same as useContext() but use is best as it could be called in conditional blocks
    //const {selectedTheme}  =  useContext(ThemeContext)
    const { selectedTheme } = use(ThemeContext);

    const variantStyle =
        variant === "primary"
            ? "primatry"
            : "secondary";
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={
                {
                    background: selectedTheme === "light" ? "#fff" : "#333",
                    color: selectedTheme === "light" ? "#333" : "#fff",
                }}
            className={`${variantStyle} ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
        >
            {label}
        </button>
    );
};
