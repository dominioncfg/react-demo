import { useRef } from "react";
import { MyButton } from "../01.component/MyButton";

export const MyUseRefPage = () => {
    const inputRef = useRef<HTMLInputElement>(null); 

    const focusOnInput = () =>{
        inputRef.current?.select();
    }

    return (
        <>
            <div className="card">
                <h1>Use Ref Demo</h1>
                <input ref={inputRef} type="text" placeholder="Type here and click outside" />
                <MyButton label="Focus on the Input" onClick={focusOnInput} />
            </div>

        </>
    );
};