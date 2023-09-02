import * as z from 'zod';

const newTaskFormSchema = z.object({ title: z.string().trim().nonempty() });

export { newTaskFormSchema };
