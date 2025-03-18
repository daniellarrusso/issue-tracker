import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const IssuePage = () => {
  return (
    <div>
      <Button variant='soft'>
        <Link href={'/issues/new'}>New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuePage;
