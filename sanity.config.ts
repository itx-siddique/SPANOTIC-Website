import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// We will import the actual schema types in Step 3 once they are created.
// import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Spanotic Digital Studio CMS',

  // Ensure these variables are populated in your .env.local
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,

  // Route where the studio will be mounted in Next.js App Router
  // (e.g., app/studio/[[...index]]/page.tsx)
  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    // Array to be populated with 'project' and 'team' schemas in Step 3
    types: [],
  },
});
