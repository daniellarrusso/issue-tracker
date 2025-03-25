import { prisma } from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import React, { useState } from 'react';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import delay from 'delay';
import IssueActions from './IssueActions';
import StyledLink from '@/app/components/StyledLink';
import { Issue, Status } from '@prisma/client';
import Link from 'next/link';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const IssuePage = async ({ searchParams }: { searchParams: Promise<{ status: Status; orderBy: keyof Issue; direction: string; }>; }) => {
  const params = await searchParams;
  const statuses = Object.values(Status);
  const columns: { label: string, value: keyof Issue, className?: string; }[] = [
    { label: 'Issue', value: 'title' },
    { label: 'Status', value: 'status', className: 'hidden md:table-cell' },
    { label: 'Created', value: 'createdAt', className: 'hidden md:table-cell' },
  ];

  const validStatus = statuses.includes(params.status) ? params.status : undefined;
  const orderBy = columns.map(col => col.value).includes(params.orderBy) ? { [params.orderBy]: params.direction } : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status: validStatus
    },
    orderBy
  });


  await delay(2000);
  return (
    <div>
      <IssueActions />
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
    </div>
  );
};

export const dynamic = 'force-dynamic';
export default IssuePage;
