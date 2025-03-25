import Pagination from '@/app/components/Pagination';
import { prisma } from '@/prisma/client';
import { Status } from '@prisma/client';

import IssueActions from './IssueActions';
import IssueTable, { columnNames, IssueQuery } from './IssueTable';
import { Flex } from '@radix-ui/themes';

const IssuePage = async ({ searchParams }: {
  searchParams:
  Promise<IssueQuery>;
}) => {
  const params = await searchParams;
  const statuses = Object.values(Status);


  const validStatus = statuses.includes(params.status) ? params.status : undefined;
  const orderBy = columnNames.includes(params.orderBy) ? { [params.orderBy]: params.direction } : undefined;

  const issueCount = await prisma.issue.count({
    where: {
      status: validStatus
    }
  });

  const page = !parseInt(params.page) && issueCount ? 1 : parseInt(params.page);
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: {
      status: validStatus
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  });



  return (
    <Flex direction={'column'} gap={'3'}>
      <IssueActions />
      <IssueTable issues={issues} searchParams={params} />
      <Pagination currentPage={page} itemCount={issueCount} pageSize={pageSize} />
    </Flex>
  );
};

export const dynamic = 'force-dynamic';
export default IssuePage;
