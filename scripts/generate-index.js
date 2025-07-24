import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = './posts';
const outFile  = './public/posts.json';

const posts = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.md'))
  .map(file => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(raw);

    // Basic validation
    const required = ['title', 'date', 'tags', 'author'];
    for (const key of required) {
      if (!data[key]) {
        throw new Error(`${file} is missing required front-matter field: ${key}`);
      }
    }

    const slug = file.replace(/\.md$/, '');
    return {
      link: `/posts/${slug}`,
      title: data.title,
      date: data.date,
      tags: data.tags,
      author: data.author
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(posts, null, 2));

console.log(`Wrote ${posts.length} posts to ${outFile}`);
