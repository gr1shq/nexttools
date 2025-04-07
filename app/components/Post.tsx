// const Post = ({category, title, description}: {category: string, title: string, description: string}) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 w-full flex flex-col ">
//         {/* <image src={`${appmysite}`} alt="AppMySite logo" className="rounded-md mb-4" /> */}
//         <h2 className="text-sm text-green-600 uppercase">{category}</h2>
//         <h3 className="text-sm sm:text-md md:text-xl font-semibold mt-1">{title}</h3>
//         <p className="text-gray-500 mt-2 text-sm md:text-md">{description}</p>
//         <p className="text-blue-600 font-medium">Read more →</p>
//     </div>
//   )
// }

// export default Post

const Post = ({ category, title, description }: { 
  category: string, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 w-full flex flex-col h-48">
      {/* Category */}
      <span className="text-xs text-green-600 uppercase font-medium block mb-1">
        {category}
      </span>

      {/* Title - Always visible */}
      <h3 className="text-base font-semibold mb-2 line-clamp-2 leading-tight">
        {title}
      </h3>

      {/* Description - Hidden on small screens */}
      <div className="flex-grow md:flex-grow-0">
        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed min-[320px]:block hidden">
          {description}
        </p>
      </div>

      {/* Read More - Always bottom-aligned */}
      <p className="text-blue-600 font-medium text-sm mt-2">
        Read more →
      </p>
    </div>
  );
};
export default Post