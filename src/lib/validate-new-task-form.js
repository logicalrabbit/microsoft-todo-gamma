import * as z from 'zod';

const newTaskFormSchema = z.object({ task: z.string().trim().nonempty() });

export { newTaskFormSchema };
