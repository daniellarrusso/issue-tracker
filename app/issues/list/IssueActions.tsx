import { Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import IssueStatusFilter from '../[id]/IssueStatusFilter';

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Flex justify={'between'}>
        <IssueStatusFilter />
        <Button variant='soft'>
          <Link href={'/issues/new'}>New Issue</Link>
        </Button>
      </Flex>

    </div>
  );
};

export default IssueActions;
