import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Button variant='soft'>
        <Link href={'/issues/new'}>New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
