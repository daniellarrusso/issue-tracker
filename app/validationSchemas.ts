import { z } from 'zod';

export const issueSchema = z.object({
  title: z.string().min(1, 'Title is Required').max(255),
  description: z.string().min(1, 'Description is Required').max(65000)
});

export const pathIssueSchema = z.object({
  title: z.string().min(1, 'Title is Required').max(255).optional(),
  description: z.string().min(1, 'Description is Required').max(65000).optional(),
  assignToUserId: z.string().max(255).nullable().optional()
});
