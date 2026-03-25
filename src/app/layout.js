import './globals.css';

export const metadata = {
  title: "Howzzat! - Aayansh's Blog",
  description: "Stories, biographies, and everything in between — by Aayansh",
  openGraph: {
    title: "Howzzat! - Aayansh's Blog",
    description: "Spinning tales & bowling yorkers",
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-content">
            <a href="/" style={{ textDecoration: 'none' }}>
              <div className="avatar-container">
                <img
                  src="/aayansh-portrait.png"
                  alt="Aayansh"
                  className="avatar"
                />
              </div>
            </a>
            <a href="/" style={{ textDecoration: 'none' }}>
              <h1 className="site-title">
                Howzzat<span className="ball-dot">!</span>
              </h1>
            </a>
            <p className="site-tagline">Spinning tales &amp; bowling yorkers</p>
            <div className="header-deco">🏏 📖 ✏️ 🏆 📚 🌟</div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-deco">🏏 📚 ✏️ 🎒 🏏</div>
          <p>
            Made with <span className="heart">❤️</span> by Aayansh
          </p>
        </footer>
      </body>
    </html>
  );
}
