import { prisma } from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssuePage';
import IssueDetails from './IssueDetails';

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
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
