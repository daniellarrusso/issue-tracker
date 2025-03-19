'use client';
import React, { useState } from 'react';
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes';
import "easymde/dist/easymde.min.css";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';


interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-3'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
      <form onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues');
        } catch (error) {
          setError('An unexpected Error occurred');
        }

        // 

      })} className='space-y-3'>
        <TextField.Root {...register('title')} placeholder='Title'>
        </TextField.Root>
        <TextArea placeholder='Description' {...register('description')} />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
