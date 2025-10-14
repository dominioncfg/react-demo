import { useState } from "react";
import { MyCustomToggleComponent } from "./MyCustomToggle";

export const MyUseStatePage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="card">
        <h1>Use State Demo</h1>
        <MyCustomToggleComponent label="SuperCheck" onCheckChanged={(value) => setIsChecked(value)} isChecked={false}  ></MyCustomToggleComponent>
        <p>The toggle is {isChecked ? "On" : "Off"}</p>
      </div>

    </>
  );
};