import { category, db, post, postmeta } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(category).values([
    { title: "Technology", slug: "technology", publish: 1 },
    { title: "Health", slug: "health", publish: 1 },
    { title: "Lifestyle", slug: "lifestyle", publish: 1 },
    { title: "Travel", slug: "travel", publish: 1 },
    { title: "Food", slug: "food", publish: 1 },
  ]);

  await db.insert(post).values([
    {
      body: "This is a post about technology.",
      category_id: 1,
      publish: 1,
      date: new Date(),
      title: "The Future of Tech",
      title_slug: "the-future-of-tech",
      subtitle: "Exploring the latest in technology.",
      subtitle_slug: "exploring-the-latest-in-technology",
      comment_count: 0,
      view: 0,
      link: "https://example.com/the-future-of-tech",
      user: 1,
      bgcolor: "#ffffff",
      excerpt: "A brief overview of the future of technology.",
    },
    {
      body: "This is a post about health.",
      category_id: 1,
      publish: 1,
      date: new Date(),
      title: "Healthy Living",
      title_slug: "healthy-living",
      subtitle: "Tips for a healthier lifestyle.",
      subtitle_slug: "tips-for-a-healthier-lifestyle",
      comment_count: 0,
      view: 0,
      link: "https://example.com/healthy-living",
      user: 1,
      bgcolor: "#ffffff",
      excerpt: "A guide to healthy living.",
    },
    {
      body: "This is a post about lifestyle.",
      category_id: 1,
      publish: 1,
      date: new Date(),
      title: "Living Your Best Life",
      title_slug: "living-your-best-life",
      subtitle: "How to improve your lifestyle.",
      subtitle_slug: "how-to-improve-your-lifestyle",
      comment_count: 0,
      view: 0,
      link: "https://example.com/living-your-best-life",
      user: 1,
      bgcolor: "#ffffff",
      excerpt: "Tips for living your best life.",
    },
  ]);

  await db.insert(postmeta).values([
    {
      name: "video_file",
      value: "b5xpH_muRp0",
      post_id: 1,
    },
    {
      name: "video_server",
      value: "y",
      post_id: 1,
    },
  ]);
}
