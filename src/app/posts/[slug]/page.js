import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import Link from 'next/link';

function getTagClass(tag) {
  const map = {
    biography: 'tag-biography',
    story: 'tag-story',
    cricket: 'tag-cricket',
    sports: 'tag-sports',
    baseball: 'tag-baseball',
    basketball: 'tag-basketball',
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

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `${post.title} — Howzzat!`,
    description: post.excerpt || '',
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const shareText = `Check out "${post.title}" on Howzzat! — Aayansh's blog`;
  const shareUrl = `https://howzzat.blog/posts/${slug}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`;

  return (
    <article className="post-article">
      <Link href="/" className="back-link">
        ← Back to My Stories
      </Link>

      {post.emoji && <div className="post-emoji-bg">{post.emoji}</div>}

      <div className="post-tags">
        {post.tags?.map((tag) => (
          <span key={tag} className={`tag ${getTagClass(tag)}`}>
            {tag}
          </span>
        ))}
      </div>

      <h1 className="post-title">{post.title}</h1>
      <p className="post-meta">
        {formatDate(post.date)} · by Aayansh
      </p>

      <div className="post-divider">🏏 ✏️ 📖 ✏️ 🏏</div>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="post-divider">🏏 ✏️ 📖 ✏️ 🏏</div>

      <div className="post-signoff">
        Howzzat, Readers? 🏏
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-button"
      >
        📱 Share on WhatsApp
      </a>
    </article>
  );
}
