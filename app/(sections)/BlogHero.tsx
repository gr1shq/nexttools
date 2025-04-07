import Post from "../components/Post"

const BlogHero = () => {
  return (
<main className="flex flex-col items-center w-full xl:px-30 lg:px-20 md:px-15 px-10 pb-20 min-h-[calc(100vh-400px)]">
  <h1 className="md:text-3xl font-bold mt-[200px] text-2xl">Latest Posts</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 w-full">
        <a href="/blog/turn-website-into-app">
        <Post category="App Builders" title="AppMySite Review: Build an App Without Code" description="AppMySite is a no-code platform that lets you build iOS and Android apps.." />
        </a>
        <a href="/blog/appmysite-vs-glide">
        <Post category="App Builders" title="AppMySite vs Glide – Which No-Code App Builder Should You Choose?" description="Two of the most popular no-code app builders — AppMySite and Glide.." />
        </a>
        <a href="/blog/why-you-need-a-mobile-app">
        <Post category="App Builders" title="The Mobile App Advantage Youre Missing in 2025" description="You might think your website is enough, but if youre not using mobile apps — youre.." />
        </a>
        </div>
    </main>
  )
}

export default BlogHero
