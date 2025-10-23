import * as z from 'zod';
import { useCreateUser } from './hooks/useUsers';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formUserDataSchema = z.object({
  fullName: z.string().min(1, 'Name is required'),
  age: z.coerce.number().int().min(0, 'Invalid Age').max(128, 'Invalid Age'),
});

export const NewUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formUserDataSchema),
    defaultValues: {
      fullName: '',
      age: 0,
    },
  });
  const creteUserMutation = useCreateUser();

  const onSubmit = handleSubmit((data) => {
    const fullName = data.fullName;
    const age = data.age!;
    creteUserMutation.mutate({ fullName, age });
    reset();
  });
  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '16px',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" {...register('fullName')} />
        </div>
        <div>
          <p role="alert">{errors.fullName?.message}</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register('age')} />
        </div>
        <div>
          <p role="alert">{errors.age?.message}</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <input
            type="submit"
            disabled={creteUserMutation.isPending}
            value="Create User"
          />
        </div>
      </div>
    </form>
  );
};
