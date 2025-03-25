import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import React from 'react';

const statusFilters: { label: string; status?: Status; }[] = [
  { label: 'All' },
  { label: 'Open', status: 'OPEN' },
  { label: 'In Progress', status: 'IN_PROGRESS' },
  { label: 'Closed', status: 'CLOSED' },
];

const IssueStatusFilter = () => {
  return (
    <Select.Root>
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
