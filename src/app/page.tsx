import style from "./page.module.css"
import HeroSection from "@/component/sections/hero";
import AboutSection from "@/component/sections/about";
import FeaturedPropertiesSection from "@/component/sections/ftproperties";
import AgentSection from "@/component/sections/agents";
import BlogSection from "@/component/sections/blogs";
export default function Home() {
  return (
    // <main>
    <main className={style.page}>
      <HeroSection />
      <AboutSection />
      <FeaturedPropertiesSection />
      <AgentSection />
      <BlogSection />
    </main>
  );
}
