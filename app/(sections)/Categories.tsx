import Category from "../components/Category"

const Categories = () => {
  return (
    <div className="w-full flex flex-col items-left xl:px-30 lg:px-20 md:px-15 px-10 mt-20">
        <h1 className="text-3xl font-bold ">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <Category category={"App Builders"} image={"📱"} articles={3} />
            {/* <Category category="Websiet Builders" image={"🌐"} articles={1} /> */}
        </div>

    </div>
  )
}

export default Categories
