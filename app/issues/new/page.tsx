'use client';
import React from 'react';
import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  const submitForm = async (data: IssueForm) => {
    await fetch('/api/issues', { body: JSON.stringify(data), method: 'post' });
    router.push('/issues');
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className='max-w-xl space-y-3'>
      <TextField.Root {...register('title')} placeholder='Title'>
      </TextField.Root>
      <Controller name='description' control={control} render={({ field }) => <SimpleMDE {...field} placeholder='Description' />} />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
