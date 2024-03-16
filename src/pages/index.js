import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Banner from "../components/Banner";
import HomeLogoUser from "../components/HomeLogoUser";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="">
      <div className="container mx-auto text-center py-24">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">{siteConfig.title}</h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">{siteConfig.tagline}</p>

        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <Link
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-25 flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            to="/docs/intro">
            Try demo
          </Link>
          <button type="button" class="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true"><path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle></svg><span class="flex-auto">Quick search...</span><kbd class="font-sans font-semibold dark:text-slate-500"><abbr title="Control" class="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd></button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
    className="antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900"
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      <HomepageHeader />
        <Banner />
        <HomeLogoUser />
      </main>
    </Layout>
  );
}
