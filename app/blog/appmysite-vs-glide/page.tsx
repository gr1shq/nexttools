import Header from "@/app/components/Header"

const page = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main className="flex flex-col justify-center min-h-screen w-full xl:px-30 lg:px-20 md:px-15">
        <div className="max-w-3xl mx-auto px-4 py-8">
  <div className="mb-10 text-center">
    <h1 className="text-3xl font-bold mb-3">
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        AppMySite vs Glide
      </span>
    </h1>
    <p className="text-xl text-gray-600">
      Which no-code app builder should you choose?
    </p>
  </div>

  <div className="bg-blue-50 rounded-xl p-6 mb-8">
    <p className="text-lg">
      Two of the most popular <span className="font-bold text-blue-600">no-code app builders</span> — 
      AppMySite and Glide — help people build apps fast. But which one is right for you?
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8 mb-12">

    <div className="border border-blue-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold">
          <span className="text-blue-600">AppMySite</span> – Best For Website Owners
        </h2>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>Converts your <span className="font-semibold">existing website</span> into an app</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>Great for <span className="font-semibold">ecommerce or blogs</span></span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>Easy for <span className="font-semibold">WordPress users</span></span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>Quick publish to <span className="font-semibold">app stores</span></span>
        </li>
      </ul>
    </div>

    <div className="border border-purple-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">

        <h2 className="text-xl font-bold">
          <span className="text-purple-600">Glide</span> – Best For Custom Apps
        </h2>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>Turns <span className="font-semibold">Google Sheets</span> into apps</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>Better for <span className="font-semibold">dashboards, CRMs</span></span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span><span className="font-semibold">Modern UI</span>, but more setup needed</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✓</span>
          <span>Great for <span className="font-semibold">internal tools</span></span>
        </li>
      </ul>
    </div>
  </div>

  <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-200">
    <h2 className="text-xl font-bold mb-4 flex items-center">
      Pricing & Ease of Use
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <h3 className="font-semibold text-blue-600 mb-2">AppMySite</h3>
        <p>Clear pricing and <span className="font-bold">fast setup</span> (under 30 mins)</p>
      </div>
      <div>
        <h3 className="font-semibold text-purple-600 mb-2">Glide</h3>
        <p>Generous <span className="font-bold">free plan</span> but gets pricey for advanced features</p>
      </div>
    </div>
  </div>

  <div className="bg-gray-50 rounded-xl p-6 mb-10 border-l-4 border-blue-500">
    <h2 className="text-xl font-bold mb-3">Verdict:</h2>
    <div className="space-y-3">
      <p className="flex items-start">
        <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
        <span>Use <span className="font-bold text-blue-600">AppMySite</span> if you want an app version of your existing site</span>
      </p>
      <p className="flex items-start">
        <span className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
        <span>Use <span className="font-bold text-purple-600">Glide</span> if you are building something from scratch like a productivity tool</span>
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-4">
    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition flex items-center justify-center">
      <span className="mr-2">🚀</span> Try AppMySite
    </a>
    <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg text-center transition flex items-center justify-center">
      <span className="mr-2">✨</span> Try Glide
    </a>
  </div>
</div>
        </main>
    </div>
  )
}

export default page
