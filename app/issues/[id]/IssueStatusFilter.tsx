'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';


import React from 'react';

const statusFilters: { label: string; status?: Status; }[] = [
  { label: 'All' },
  { label: 'Open', status: 'OPEN' },
  { label: 'In Progress', status: 'IN_PROGRESS' },
  { label: 'Closed', status: 'CLOSED' },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root defaultValue={searchParams.get('status')!} onValueChange={(status) => {
      const params = new URLSearchParams();
      if (status) params.append('status', status);
      if (searchParams.get('orderBy')) params.append('orderBy', searchParams.get('orderBy')!);

      const query = params.size ? '?' + params.toString() : '';
      router.push('/issues/list' + query);
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
