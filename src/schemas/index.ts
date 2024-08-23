import { z } from "astro:content";

export const astroSchema = z.object({
  title: z.string(),
  date: z.date(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional()
});
