import React from 'react';
import IssueForm from '../../_components/IssueFrom';
import { prisma } from '@/prisma/client';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string; };
}

const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id)
    }
  });

  if (!issue) notFound();

  return (
    <IssueForm issue={issue} />
  );
};

export default EditIssuePage;
