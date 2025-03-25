import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import StyledLink from '@/app/components/StyledLink';
import { Issue, Status } from '@prisma/client';
import { Table } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


export interface IssueQuery {
  status: Status; orderBy: keyof Issue; direction: string; page: string;
}
interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}


const IssueTable = ({ searchParams: params, issues }: Props) => {

  return (
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          {columns.map(col =>
            <Table.ColumnHeaderCell className={col.className} key={col.value}>
              <Link href={{
                query: { ...params, orderBy: col.value, direction: params.direction === 'asc' ? 'desc' : 'asc' }
              }
              }>{col.label}</Link>
              {col.value === params.orderBy ? params.direction === 'asc' ? <FaArrowUp className='inline' /> : <FaArrowDown className='inline' /> : null}
            </Table.ColumnHeaderCell>
          )}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map(issue => <Table.Row key={issue.id}>
          <Table.Cell>
            <StyledLink href={`/issues/${issue.id}`}> {issue.title} </StyledLink>
            <div className="block md:hidden"><IssueStatusBadge status={issue.status} /></div></Table.Cell>
          <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status} /></Table.Cell>
          <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
        </Table.Row>)}
      </Table.Body>
    </Table.Root>
  );
};

const columns: { label: string, value: keyof Issue, className?: string; }[] = [
  { label: 'Issue', value: 'title' },
  { label: 'Status', value: 'status', className: 'hidden md:table-cell' },
  { label: 'Created', value: 'createdAt', className: 'hidden md:table-cell' },
];

export const columnNames = columns.map(col => col.value);

export default IssueTable;
