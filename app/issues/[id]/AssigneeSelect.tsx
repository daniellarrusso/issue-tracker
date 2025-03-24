'use client';
// import { prisma } from '@/prisma/client';
import { Skeleton } from '@/app/components';
import { Issue, User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AssigneeSelect = ({ issue }: { issue: Issue; }) => {

  const { data: users, isLoading, error } = useUsers();

  const assignIssue = async (userId: string) => {
    try {
      await axios.patch('/api/issues/' + issue.id, { assignedToUserId: userId !== 'unassigned' ? userId : null });
    } catch (error) {
      console.log(error);
      toast.error('Changes could not be saved');
    }
  };

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <div>
      <Select.Root defaultValue={issue.assignedToUserId || 'unassigned'} onValueChange={assignIssue}>
        <Select.Trigger placeholder='Assign'></Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value={'unassigned'}>Unassigned</Select.Item>
            {users?.map(user => <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </div>
  );
};

export const useUsers = () => useQuery<User[]>({
  queryKey: ['users'],
  queryFn: () => axios.get('/api/users').then(res => res.data),
  staleTime: 60 * 1000,
  retry: 3
});


export default AssigneeSelect;
