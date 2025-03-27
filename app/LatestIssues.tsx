import { prisma } from '@/prisma/client';
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes';
import React from 'react';
import IssueStatusBadge from './components/IssueStatusBadge';
import Link from 'next/link';

const LatestIssues = async () => {

  const issues = await prisma.issue.findMany({
    orderBy: { ['createdAt']: 'desc' },
    where: { status: { in: ['IN_PROGRESS', 'OPEN'] } },
    take: 5,
    include: {
      assignedUser: true,
    }
  });

  return (
    <Card>
      <Heading size={'4'} mb={'5'}>Latest Issues</Heading>
      <Table.Root>
        <Table.Body>
          {issues.map(issue =>
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify={'between'}>
                  <Flex align={'start'} direction={'column'} gap={'1'}>
                    <Link href={'/issues/' + issue.id}>
                      {issue.title}
                    </Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUserId && <Avatar referrerPolicy='no-referrer' fallback='?' src={issue.assignedUser!.image!} />}
                </Flex>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
