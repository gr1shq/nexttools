const Post = ({category, title, description}: {category: string, title: string, description: string}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
        {/* <image src={`${appmysite}`} alt="AppMySite logo" className="rounded-md mb-4" /> */}
        <h2 className="text-sm text-green-600 uppercase">{category}</h2>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <p className="text-blue-600 font-medium">Read more →</p>
    </div>
  )
}

export default Post
