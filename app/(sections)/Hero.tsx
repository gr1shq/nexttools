import Link from "next/link"

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-end h-[60vh] min-[250px]:h-[50vh] min-[290px]:h-[55vh] min-[330px]:h-[50vh] min-[360px]:h-[60vh] min-[390px]:h-[50vh] min-[400px]:h-[40vh] sm:h-[40vh] w-full text-center xl:px-30 lg:px-20 md:px-15 px-10 ">
        <h2 className="text-[28px] font-bold md:text-4xl">Discover the Best <span className="text-blue-600">No-Code Tools</span> to Build Your Online Empire</h2>
        <p className="mt-4 md:text-lg text-[15px]">NextTools is a collection of tools to help you build your online empire. From social media management to e-commerce, we have got you covered.</p>
        <Link href={"/blog"}>
        <button className="px-4 py-2 mt-8 text-white bg-black hover:bg-gray-800">Explore the blog</button>
        </Link>
    </main>
  )
}

export default Hero
