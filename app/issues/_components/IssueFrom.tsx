'use client';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { issueSchema } from '@/app/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import { Button, Callout, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const SimpleMde = dynamic(() => import('react-simplemde-editor'), { ssr: false });

type IssueFormData = z.infer<typeof issueSchema>;


const IssueForm = ({ issue }: { issue?: Issue; }) => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<IssueFormData>({
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
          if (issue) await axios.patch('/api/issues/' + issue.id, data);
          else
            await axios.post('/api/issues', data);
          router.push('/issues');
        } catch (error) {
          setError('An unexpected Error occurred' + error);
        }

        // 

      })} className='space-y-3'>
        <TextField.Root defaultValue={issue?.title} {...register('title')} placeholder='Title'>
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller defaultValue={issue?.description} name='description' control={control} render={({ field }) =>
          <SimpleMde {...field} placeholder='Description'></SimpleMde>
        }></Controller>

        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>{issue ? 'Update Issue' : 'Submit New Issue'}{' '}
          {isSubmitting && <Spinner />}</Button>
      </form>
    </div>
  );
};

export default IssueForm;
