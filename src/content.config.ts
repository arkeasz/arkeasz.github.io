import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{mdx,md}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			tacs: z.string().optional(),
			pub: z.boolean(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { blog };
