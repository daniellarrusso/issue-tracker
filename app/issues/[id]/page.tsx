import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import { prisma } from '@/prisma/client';
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Pencil2Icon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface Props {
  params: { id: string; };
}
const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id)
    }
  });
  await delay(2000);

  if (!issue) notFound();

  return (
    <Grid gap={'5'} columns={{ initial: '1', md: '2' }}>
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap={'3'} mb={'2'}>
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className='prose mt-4'>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button> <Pencil2Icon /> <Link href={`/issuses/${issue.id}/edit`}>Edit Issue</Link> </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
