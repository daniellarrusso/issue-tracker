
'use client';
import Spinner from '@/app/components/Spinner';
import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DeleteIssueButton = ({ issueId }: { issueId: number; }) => {
  const [error, setError] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button disabled={deleting} color='red'> <TrashIcon /> Delete Issue  {deleting && <Spinner />}</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>Are you sure you want to delte this issue. This action cannot be undone</AlertDialog.Description>
          <Flex className='mt-4' gap={'3'}>
            <AlertDialog.Cancel><Button variant='soft' color='gray'>Cancel</Button></AlertDialog.Cancel>
            <AlertDialog.Action><Button onClick={async () => {
              try {
                setDeleting(true);
                await axios.delete('/api/issues/' + issueId);
                router.push('/issues');
              } catch (error) {
                setError(true);
                console.log(error);
              }
              finally {
                setDeleting(false);
              }
            }} color='red'>Delete Issue</Button></AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root onOpenChange={setError} open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This issue could not be deleted
          </AlertDialog.Description>
          <Button className='mt-4' onClick={() => setError(false)} variant='soft' color='gray'>Close</Button>

        </AlertDialog.Content>

      </AlertDialog.Root>
    </>

  );
};

export default DeleteIssueButton;
