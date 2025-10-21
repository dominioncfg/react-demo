import type { FormEvent } from 'react';
import { useCreateUser } from './hooks/useUsers';

export const NewUserForm = () => {
  const creteUserMutation = useCreateUser();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ✅ stop the default form submission

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = formData.get('fName')?.toString() ?? '';
    const age = Number.parseInt(formData.get('age')?.toString() ?? '0');

    if (fullName === '' || age <= 0) return;

    creteUserMutation.mutate({ fullName, age });
    form.reset();
  };
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
          <label htmlFor="fName">Full Name</label>
          <input id="fName" name="fName" type="text" placeholder="Full Name" />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" placeholder="Age" />
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
