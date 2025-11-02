import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetUsers } from './hooks/useUsers';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { Button } from '@/components/ui/button';
import { ArrowUpRightIcon, User2Icon, Plus } from "lucide-react"
export type UserListProps =
  {
    onShowCreate?: () => void,
  }

export const UserList = ({ onShowCreate }: UserListProps) => {
  const users = useGetUsers();

  if (users.isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  if (!users.data || users.data?.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <User2Icon />
          </EmptyMedia>
          <EmptyTitle>No Users Yet</EmptyTitle>
          <EmptyDescription>
            You haven&apos;t created any projects users. Get started by creating
            your first user.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button onClick={() => onShowCreate?.()}>Create Project</Button>
          </div>
        </EmptyContent>
        <Button
          variant="link"
          asChild
          className="text-muted-foreground"
          size="sm"
        >
          <a href="#">
            Learn More <ArrowUpRightIcon />
          </a>
        </Button>
      </Empty>
    )
  }

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Your Users ({users.data?.length})</h1>
        <div className='flex flex-row justify-end'>
          <Button data-testid="AddUser" className='rounded-full' onClick={() => onShowCreate?.()}>
            <Plus />
          </Button>
        </div>
        <Table>
          <TableCaption>A list of your users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-bold">Id</TableHead>
              <TableHead className='font-bold'>Full Name</TableHead>
              <TableHead className='font-bold'>Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.data?.map((u) => (
              <TableRow key={u.id}>
                <TableCell className="font-medium">{u.id}</TableCell>
                <TableCell>{u.fullName}</TableCell>
                <TableCell>{u.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};


