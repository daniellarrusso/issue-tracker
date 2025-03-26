import { prisma } from '@/prisma/client';
import IssueSummary from './IssueSummary';
import LatestIssues from './LatestIssues';
import { Flex } from '@radix-ui/themes';
import IssueChart from './IssueChart';


export default async function Home() {

  const openIssues = await prisma.issue.count({ where: { status: 'OPEN' } });
  const InProgressIssues = await prisma.issue.count({ where: { status: 'IN_PROGRESS' } });
  const closedIssues = await prisma.issue.count({ where: { status: 'CLOSED' } });
  return (
    <div>
      <Flex direction={'column'} gap={'4'}>
        <IssueChart open={openIssues} inProgress={InProgressIssues} closed={closedIssues} />
        <IssueSummary open={openIssues} inProgress={InProgressIssues} closed={closedIssues} />
        <LatestIssues />

      </Flex>
    </div>
  );
}
