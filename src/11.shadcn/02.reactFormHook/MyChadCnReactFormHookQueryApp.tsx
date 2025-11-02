import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from '@tanstack/react-query';
import { UserList } from './UserList';
import { NewUserForm } from './NewUserForm';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const options: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
};
const queryClient = new QueryClient(options);

//Same app as 05 React Query but with Tests and Rfeact Form hook
export const MyChadCnReactFormHookQueryApp = () => {
  const [createIsOpen, setCreateIsOpen] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-svh flex-col items-center justify-center gap-4">
        <UserList onShowCreate={() => setCreateIsOpen(true)} />
        <Sheet open={createIsOpen} onOpenChange={(isOpen) => setCreateIsOpen(isOpen)}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create a new User</SheetTitle>
              <SheetDescription>
                After creating it you will be able to see it.
              </SheetDescription>
              <NewUserForm onUserCreatedSuccessfully={() => setCreateIsOpen(false)} />
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </QueryClientProvider>
  );
};
