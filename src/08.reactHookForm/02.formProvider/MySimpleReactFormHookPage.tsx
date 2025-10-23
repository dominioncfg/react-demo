import { FormProvider, useForm } from 'react-hook-form';
import { MyDisplayFormNameComponent } from './MyFirstNameComponent';

type GenderEnum = 'femalea' | 'male' | 'other';

export type MySuperFormData = {
  firstName: string;
  lastName: string;
  age: number;
  isGood: boolean;
  gender: GenderEnum;
};

export default function MySimpleFormProviderReactFormHookPage() {
  const form = useForm<MySuperFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 0,
      isGood: false,
    },
  });
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = form;
  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name</label>
          <input
            {...register('firstName', {
              required: 'common dammit put something here',
              maxLength: { value: 10, message: 'Too Long man' },
            })}
          />
          <p role="alert">{errors.firstName?.message}</p>
        </div>
        <div>
          <label>Last Name</label>
          <input
            {...register('lastName', {
              required: 'are you blind!',
              maxLength: {
                value: 10,
                message: 'Get out of here if that is your last name',
              },
            })}
          />
          <p role="alert">{errors.lastName?.message}</p>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            {...register('age', {
              min: {
                value: 18,
                message: 'Nah go home kid',
              },
            })}
          />
          <p role="alert">{errors.age?.message}</p>
        </div>
        <div>
          <label>Is good</label>
          <input type="checkbox" {...register('isGood')} />
          <p role="alert">{errors.isGood?.message}</p>
        </div>
        <div>
          <select {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <p role="alert"></p>
        </div>
        <MyDisplayFormNameComponent />
        <div>
          <button
            type="button"
            onClick={() => {
              console.log(getValues('age'));
              setValue('lastName', 'Juan');
              setValue('firstName', 'Pablo');
            }}
          >
            SetValue
          </button>
          <button
            type="button"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
          <input type="submit" disabled={isSubmitting} value="Submit" />
        </div>
      </form>
    </FormProvider>
  );
}
