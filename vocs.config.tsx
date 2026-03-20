import { defineConfig } from "vocs";

export default defineConfig({
  basePath: process.env.BASE_PATH || undefined,
  title: "Mirage Blog",
  logoUrl: "/logo.svg",
  iconUrl: "/logo.svg",
  blogDir: "./pages/posts",
  socials: [
    {
      icon: "x",
      link: "https://x.com/mirageprivacy",
    },
    {
      icon: "discord",
      link: "https://discord.gg/FCcKwPyBxV",
    },
    {
      icon: "github",
      link: "https://github.com/MiragePrivacy",
    },
  ],
  topNav: [

    {
      text: "Documentation",
      link: "https://docs.mirageprivacy.com",
    },
    {
      text: "App",
      link: "https://mirageprivacy.com",
    },
    {
      text: "About Us",
      link: "https://mirageprivacy.com/#/about",
    },
  ],
  head() {
    return (
      <>
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="Mirage Blog" />
        <meta
          property="og:description"
          content="Dispatches from the frontier of on-chain privacy."
        />
      </>
    );
  },
});
