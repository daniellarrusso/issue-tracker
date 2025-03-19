'use client';
import React, { useState } from 'react';
import { Button, Callout, Text, TextArea, TextField } from '@radix-ui/themes';
import "easymde/dist/easymde.min.css";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { issueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';


type IssueForm = z.infer<typeof issueSchema>;


const NewIssuePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema)
  });
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
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextArea placeholder='Description' {...register('description')} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
