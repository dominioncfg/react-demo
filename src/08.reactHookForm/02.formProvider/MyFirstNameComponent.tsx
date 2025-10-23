import { useFormContext } from 'react-hook-form';
import type { MySuperFormData } from './MySimpleReactFormHookPage';

export const MyDisplayFormNameComponent = () => {
  const { watch } = useFormContext<MySuperFormData>();
  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const fullName = firstName || lastName ? `${firstName} ${lastName}` : null;

  return (
    <div>
      {fullName && (
        <div>
          <strong>Go Ahead {fullName} submit this shit!</strong>
        </div>
      )}
    </div>
  );
};
