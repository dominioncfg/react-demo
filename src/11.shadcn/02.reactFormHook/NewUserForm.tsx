import * as z from 'zod';
import { useCreateUser } from './hooks/useUsers';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const formUserDataSchema = z.object({
  fullName: z.string().min(1, 'Name is required'),
  age: z.int().min(0, 'Invalid Age').max(128, 'Invalid Age'),
});

export type NewUserFormProps = {
  onUserCreatedSuccessfully?: () => void;
};

export const NewUserForm = ({
  onUserCreatedSuccessfully,
}: NewUserFormProps) => {
  const form = useForm<z.infer<typeof formUserDataSchema>>({
    resolver: zodResolver(formUserDataSchema),
    defaultValues: {
      fullName: '',
      age: 0,
    },
    mode: 'onBlur',
  });
  const creteUserMutation = useCreateUser();

  const onSubmit = (data: z.infer<typeof formUserDataSchema>) => {
    const fullName = data.fullName;
    const age = data.age!;
    creteUserMutation.mutate({ fullName, age });
    onUserCreatedSuccessfully?.();
    form.reset();
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 mt-3"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription className="text-right">
                  This is his public display name
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Age"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormDescription className="text-right">
                  How old is he
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create User</Button>
        </form>
      </Form>
    </>
  );
};
