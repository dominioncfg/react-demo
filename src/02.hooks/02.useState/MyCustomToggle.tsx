import { useEffect, useState } from 'react';

export interface MyCustomToggleProps {
  isChecked: boolean;
  label: string;
  onCheckChanged?: (checked: boolean) => void;
}

export const MyCustomToggleComponent = ({
  isChecked = false,
  label,
  onCheckChanged,
}: MyCustomToggleProps) => {
  const [isCheckedState, setIsChecked] = useState(isChecked);

  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isCheckedState}
          onChange={() => {
            const newChecked = !isCheckedState;
            setIsChecked(newChecked);
            onCheckChanged?.(newChecked);
          }}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
