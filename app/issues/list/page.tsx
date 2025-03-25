import { prisma } from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import React from 'react';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import delay from 'delay';
import IssueActions from './IssueActions';
import StyledLink from '@/app/components/StyledLink';
import { Status } from '@prisma/client';

const IssuePage = async ({ searchParams }: { searchParams: Promise<{ status: Status; }>; }) => {
  const { status } = await searchParams;
  const statuses = Object.values(Status);
  const validStatus = statuses.includes(status) ? status : undefined;
  const issues = await prisma.issue.findMany({
    where: {
      status: validStatus
    }
  });


  await delay(2000);
  return (
    <div>
      <IssueActions />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
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
