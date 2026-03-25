import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

function getTagClass(tag) {
  const map = {
    biography: 'tag-biography',
    story: 'tag-story',
    cricket: 'tag-cricket',
    sports: 'tag-sports',
    history: 'tag-history',
    science: 'tag-science',
    adventure: 'tag-adventure',
    fiction: 'tag-fiction',
    nature: 'tag-nature',
    space: 'tag-space',
    welcome: 'tag-welcome',
    animals: 'tag-animals',
    india: 'tag-india',
  };
  return map[tag.toLowerCase()] || 'tag-default';
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <h2 className="section-title">My Stories</h2>
      <span className="post-count">{posts.length} {posts.length === 1 ? 'story' : 'stories'} so far!</span>
      <div className="posts-grid">
        {posts.map((post) => (
        <Link
          href={`/posts/${post.slug}`}
          key={post.slug}
          className="post-card"
        >
          {post.emoji && <span className="card-emoji">{post.emoji}</span>}
          <span className="card-date">{formatDate(post.date)}</span>
          <h2 className="card-title">{post.title}</h2>
          <p className="card-excerpt">{post.excerpt}</p>
          <div className="card-tags">
            {post.tags?.map((tag) => (
              <span key={tag} className={`tag ${getTagClass(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
      </div>
    </>
  );
}
