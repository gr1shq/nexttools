import Post from "../components/Post"

const BlogHero = () => {
  return (
    <main className="flex flex-col items-center justify-start h-[80vh] w-full xl:px-30 lg:px-20 md:px-15">
        <h1 className="text-3xl font-bold mt-[200px]">Latest Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <a href="/blog/turn-website-into-app">
        <Post category="App Builders" title="AppMySite Review: Build an App Without Code" description="AppMySite is a no-code platform that lets you build iOS and Android apps.." />
        </a>
        <a href="/blog/appmysite-vs-glide">
        <Post category="App Builders" title="AppMySite vs Glide – Which No-Code App Builder Should You Choose?" description="Two of the most popular no-code app builders — AppMySite and Glide.." />
        </a>
        <a href="/blog/why-you-need-a-mobile-app">
        <Post category="App Builders" title="The Mobile App Advantage You're Missing in 2025" description="You might think your website is enough, but if you're not using mobile apps — you're.." />
        </a>
        </div>
    </main>
  )
}

export default BlogHero
