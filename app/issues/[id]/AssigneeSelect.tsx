'use client';
// import { prisma } from '@/prisma/client';
import { Select } from '@radix-ui/themes';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from '@prisma/client';
import { Skeleton } from '@/app/components';

const AssigneeSelect = () => {
  // const users = await prisma.user.findMany();

  const { data: users, isLoading, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
    staleTime: 60 * 1000,
    retry: 3
  });

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <div>
      <Select.Root>
        <Select.Trigger placeholder='Assign'></Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            {users?.map(user => <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)}

          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default AssigneeSelect;
