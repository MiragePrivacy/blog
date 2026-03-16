import { useEffect, useState } from "react";

interface PostFrontmatter {
  title: string;
  description: string;
  cover: string;
  authors: string[];
  authorImg: string;
  date: string;
  tags: string[];
}

const modules = import.meta.glob("../pages/posts/*.mdx", { eager: true }) as Record<
  string,
  { frontmatter: PostFrontmatter }
>;

const posts = Object.entries(modules)
  .filter(([path]) => !path.endsWith("index.mdx"))
  .map(([path, mod]) => {
    const slug = path.replace("../pages/posts/", "").replace(".mdx", "");
    const fm = mod.frontmatter;
    const authorMatch = fm.authors?.[0]?.match(/\[(.+?)\]/);
    return {
      title: fm.title,
      description: fm.description,
      path: `/posts/${slug}`,
      author: authorMatch ? authorMatch[1] : fm.authors?.[0] ?? "",
      authorImg: fm.authorImg,
      date: new Date(fm.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      tags: fm.tags ?? [],
      cover: fm.cover,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const allTags = [...new Set(posts.flatMap((p) => p.tags))];

function getInitialTag() {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const tag = params.get("tag");
  return tag && allTags.includes(tag) ? tag : null;
}

export default function PostsList() {
  const [activeTag, setActiveTag] = useState<string | null>(getInitialTag);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  const selectTag = (tag: string | null) => {
    setActiveTag(tag);
    const url = new URL(window.location.href);
    if (tag) url.searchParams.set("tag", tag);
    else url.searchParams.delete("tag");
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div>
      <div className="tag-filters">
        <button
          className={`tag-pill ${activeTag === null ? "tag-pill-active" : ""}`}
          onClick={() => selectTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag-pill ${activeTag === tag ? "tag-pill-active" : ""}`}
            onClick={() => selectTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="post-grid" style={{ marginTop: 32 }}>
        {filtered.map((post) => (
          <a
            key={post.path}
            href={post.path}
            className="vocs_Link vocs_Link_styleless"
            style={{ textDecoration: "none" }}
          >
            <div className="post-card">
              <img
                src={post.cover}
                alt={post.title}
                className="post-card-image"
              />
              <div className="post-card-body">
                <div className="author-row">
                  <img
                    src={post.authorImg}
                    alt={post.author}
                    className="author-img"
                  />
                  <span className="text-[13px] text-[#919193]">
                    {post.author}
                  </span>
                  <span className="text-[13px] text-[#919193]">&middot;</span>
                  <span className="text-[13px] text-[#919193]">
                    {post.date}
                  </span>
                </div>
                <h3
                  className="text-[20px] font-semibold text-black dark:text-white leading-snug mb-3"
                  style={{ margin: "0 0 12px 0" }}
                >
                  {post.title}
                </h3>
                <span
                  className="block text-[15px] text-[#919193] leading-relaxed mb-4"
                  style={{ margin: "0 0 16px 0" }}
                >
                  {post.description}
                </span>
                <span className="read-more">Read More &rarr;</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
