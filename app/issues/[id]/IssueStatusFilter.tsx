'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';


import React from 'react';

const statusFilters: { label: string; status?: Status; }[] = [
  { label: 'All' },
  { label: 'Open', status: 'OPEN' },
  { label: 'In Progress', status: 'IN_PROGRESS' },
  { label: 'Closed', status: 'CLOSED' },
];

const IssueStatusFilter = () => {
  const router = useRouter();

  return (
    <Select.Root onValueChange={(status) => {
      const queryParams = status !== 'All' ? '?status=' + status : '';
      router.push('/issues/list' + queryParams);
    }}>
      <Select.Trigger placeholder='Apply Filter...'></Select.Trigger>
      <Select.Content>
        {statusFilters.map(stat =>
          <Select.Item key={stat.label} value={stat.status || 'All'}>{stat.label}</Select.Item>
        )}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
