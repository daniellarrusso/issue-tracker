import { prisma } from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import delay from 'delay';
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
import DeleteIssueButton from './DeleteIssueButton';

interface Props {
  params: Promise<{ id: string; }>;
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
        <Flex direction={'column'} gap={'4'}>
          <div>
            <EditIssueButton issueId={issue.id} />
          </div>
          <div>
            <DeleteIssueButton issueId={issue.id} />
          </div>
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
