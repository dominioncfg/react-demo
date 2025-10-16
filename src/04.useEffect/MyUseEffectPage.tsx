import { useEffect, useState } from "react";
import { MyButton } from "../01.component/MyButton";
import { MyCustomToggleComponent } from "../03.useState/MyCustomToggle";

export const MyUseEffectPage = () => {
  const [text, setText] = useState('');
  const [isAutoSave, setIsAutoSave] = useState(false);

  const saveTextToLocalStorage = () => {
    localStorage.setItem('useEffect.Text', text);
  }

  const saveAutoSaveState = (value: boolean) => {
    setIsAutoSave(value);
    localStorage.setItem('useEffect.AutoSave', value.toString());
  }


  useEffect(() => {
    if (isAutoSave) {
      localStorage.setItem('useEffect.Text', text);
    }
  }, [isAutoSave, text]);


  useEffect(() => {
    const savedText = localStorage.getItem('useEffect.Text');
    if (savedText) {
      setText(savedText);
    }

    const savedAutoSave = localStorage.getItem('useEffect.AutoSave');
    if (savedAutoSave) {
      setIsAutoSave(savedAutoSave === 'true');
    }
  }, []);


  return (
    <>
      <div className="card">
        <h1>Use Effect Demo</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <MyCustomToggleComponent label="AutoSave" isChecked={isAutoSave} onCheckChanged={(value) => saveAutoSaveState(value)}  ></MyCustomToggleComponent>
        <MyButton label="Save Text" variant="primary" onClick={saveTextToLocalStorage}></MyButton>
      </div>

    </>
  );
};