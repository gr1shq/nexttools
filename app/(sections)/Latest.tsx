import Post from "../components/Post"

const Latest = () => {
  return (
    <div className="w-full flex flex-col items-left xl:px-30 lg:px-20 md:px-15 px-10 mt-20">
        <h1 className="text-3xl font-bold ">Latest Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <a href="/blog/turn-website-into-app">
            <Post category={"App Builders"} title={"AppMySite Review: Build an App Without Code"} description={"AppMySite is a no-code platform that lets you build iOS and Android apps.."}/>
          </a>
          <a href="/blog/appmysite-vs-glide">
          <Post category="App Builders" title="AppMySite vs Glide – Which No-Code App Builder Should You Choose?" description="Two of the most popular no-code app builders — AppMySite and Glide.." />
          </a>
          <a href="/blog/why-you-need-a-mobile-app">
        <Post category="App Builders" title="The Mobile App Advantage You are Missing in 2025" description="You might think your website is enough, but if you are not using mobile apps — you are.." />
        </a>
        </div>
    </div>
  )
}

export default Latest
