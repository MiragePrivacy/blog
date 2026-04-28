import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isArticle, setIsArticle] = useState(false);

  useEffect(() => {
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
    const isBlogPost =
      window.location.pathname.startsWith(`${basePath}/posts/`) &&
      window.location.pathname !== `${basePath}/posts/` &&
      window.location.pathname !== `${basePath}/posts`;
    setIsArticle(isBlogPost);

    if (!isBlogPost) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isArticle && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${progress}%`,
            height: "3px",
            background: "linear-gradient(90deg, #f97316, #fb923c)",
            zIndex: 9999,
            transition: "width 50ms linear",
          }}
        />
      )}
      {children}
    </>
  );
}
