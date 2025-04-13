---
## Installation

Run the following command in your terminal

```bash
npm install
```

Once the packages are installed you are ready to run astro. Astro comes with a built-in development server that has everything you need for project development. The astro dev command will start the local development server so that you can see your new website in action for the very first time.

```bash
npm run dev
```

## Tech Stack

- [Astro](https://astro.build)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Adding New Pages

This project follows a specific structure for creating new pages. Here's how to add a new page:

### 1. Static Pages
For simple static pages:
1. Create a new `.astro` file in the appropriate section of `src/pages`
2. Use the `PostLayout` component for consistent styling
3. Follow the existing page structure:

```astro
---

import { BlogSchema } from "../content/config";
import PostLayout from "../layouts/PostLayout.astro";
import { Image } from "astro:assets";

const post: BlogSchema = {
title: "Your Page Title",
description: "Your page description",
pubDate: "YYYY-MM-DD",
badge: "Your Badge",
tags: ["tag1", "tag2"]
};

---

<PostLayout
title={post.title}
description={post.description}
pubDate={post.pubDate}
badge={post.badge}
tags={post.tags}

>

  <article class="prose prose-lg lg:max-w-[750px] prose-img:mx-auto" dir="rtl">
    <!-- Your content here -->
  </article>
</PostLayout>
```

### 2. Dynamic Pages

For pages that use content from the `content` directory:

1. Create a new `.astro` file in the appropriate section of `src/pages`
2. Use the content collection system:

```astro
---
import { getCollection } from "astro:content";
import { BlogSchema } from "../content/config";
import PostLayout from "../layouts/PostLayout.astro";
import { Image } from "astro:assets";

const entries = await getCollection("your-collection-name");
---

<PostLayout
  title="Your Title"
  description="Your Description"
>
  <article class="prose prose-lg lg:max-w-[750px] prose-img:mx-auto" dir="rtl">
    <!-- Use your entries here -->
  </article>
</PostLayout>
```

### 3. Directory Structure

- `src/pages/`: Contains all website pages
  - Directories like `contest/` group related pages
  - Files like `index.astro` create main pages
  - Files like `[slug].astro` create dynamic pages
- `src/layouts/`: Contains page layouts
  - `PostLayout.astro`: Main layout for blog-like pages
  - `BaseLayout.astro`: Base layout for all pages
- `public/`: Contains static assets
  - Images and PDFs should be placed in appropriate subdirectories

### 4. Styling Guidelines

- Use Tailwind CSS classes for styling
- Use DaisyUI components for UI elements
- Follow RTL support for Persian content
- Use the existing color scheme and typography

### 5. Best Practices

- Always use the `PostLayout` component for consistency
- Use Astro's built-in components like `Image` for optimized assets
- Follow the existing metadata structure (title, description, pubDate, etc.)
- Keep content RTL-aware for Persian text
- Use the existing component patterns from `src/components`
