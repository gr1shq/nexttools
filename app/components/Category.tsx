const Category = ({category, image, articles}: {category: string, image: any, articles: number} ) => {
  return (
    <div>
        <a href="#" className="bg-white rounded-xl shadow hover:shadow-md transition p-5 flex flex-col items-start">
        
        <span className="text-3xl">{image}</span>
        <h3 className="text-lg font-semibold mt-2">{category}</h3>
        <p className="text-sm text-gray-500 mt-1">{articles} article</p>
        </a>
    </div>
  )
}

export default Category
