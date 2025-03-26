import { prisma } from '@/prisma/client';
import IssueSummary from './IssueSummary';
import LatestIssues from './LatestIssues';
import { Flex, Grid } from '@radix-ui/themes';
import IssueChart from './IssueChart';


export default async function Home() {

  const openIssues = await prisma.issue.count({ where: { status: 'OPEN' } });
  const InProgressIssues = await prisma.issue.count({ where: { status: 'IN_PROGRESS' } });
  const closedIssues = await prisma.issue.count({ where: { status: 'CLOSED' } });
  return (
    <Grid columns={{ initial: '1', md: '2' }} gap={'5'}>
      <Flex direction={'column'} gap={'5'}>
        <IssueSummary open={openIssues} inProgress={InProgressIssues} closed={closedIssues} />
        <IssueChart open={openIssues} inProgress={InProgressIssues} closed={closedIssues} />
      </Flex>
      <LatestIssues />
      {/* <Flex direction={'column'} gap={'4'}>
        
        
        

      </Flex> */}
    </Grid>
  );
}
