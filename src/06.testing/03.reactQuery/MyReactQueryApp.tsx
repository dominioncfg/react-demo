import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from '@tanstack/react-query';
import { UserList } from './UserList';
import { NewUserForm } from './NewUserForm';

const options: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
};
const queryClient = new QueryClient(options);

//Same app as 05 React Query but with Tests
export const MyReactQueryApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React query Demo</h1>
        <NewUserForm />
        <UserList />
      </div>
    </QueryClientProvider>
  );
};
