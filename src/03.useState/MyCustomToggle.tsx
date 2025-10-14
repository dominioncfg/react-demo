import { useState } from "react";

export interface MyCustomToggleProps {
    initialState?: boolean;
    label: string;
    onCheckChanged?: (checked: boolean) => void;
}


export const MyCustomToggleComponent = ({
    initialState = false,
    label,
    onCheckChanged
}: MyCustomToggleProps) => {
    const [isChecked, setIsChecked] = useState(initialState);

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                        const newChecked = !isChecked;
                        setIsChecked(newChecked);
                        onCheckChanged?.(newChecked);
                    }}
                />
                <span>{label}</span>
            </label>
        </div>
    )
};