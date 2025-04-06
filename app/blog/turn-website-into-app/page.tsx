import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

const page = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main className="flex flex-col justify-start min-h-screen w-full xl:px-30 lg:px-20 md:px-15">
  <h1 className="text-4xl font-bold text-center mb-4 mt-[120px]">How to Turn Your Website Into an App Without Coding</h1>
  <div className="max-w-3xl mx-auto px-4 py-8">
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
      <p className="text-lg">
        Ever dreamed of having your own <span className="font-bold text-blue-600">mobile app</span>, but don't know how to code? Good news — it's now <span className="font-semibold underline decoration-blue-300">easier than ever</span> to convert your existing website into a mobile app using no-code tools like <span className="font-bold bg-blue-100 px-2 rounded">AppMySite</span>.
      </p>
    </div>

    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200">
        What is <span className="text-blue-600">AppMySite</span>?
      </h2>
      <p className="mb-6">
        AppMySite is a <span className="font-semibold text-blue-600">no-code platform</span> that lets you build <span className="font-semibold">iOS and Android apps</span> from your website in minutes. Whether you run a <span className="italic">blog</span>, <span className="italic">ecommerce store</span>, or <span className="italic">portfolio site</span>, you can have a mobile version with <span className="font-bold text-green-600">no technical skills</span>.
      </p>
    </div>

    {/* Steps */}
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200">
        Steps to Convert Your Site
      </h3>
      <ol className="list-decimal pl-6 space-y-3">
        <li className="font-medium">Sign up on AppMySite</li>
        <li className="font-medium">Connect your website (WordPress, WooCommerce, or any custom site)</li>
        <li className="font-medium">Customize your app's design with brand colors and logo</li>
        <li className="font-medium">Preview and publish to the App Store or Google Play</li>
      </ol>
    </div>

    <div className="bg-gray-50 p-6 rounded-xl mb-10 border border-gray-200">
      <h4 className="font-bold text-lg mb-4 text-center">Key Differences: Website vs. App</h4>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 font-medium">Feature</th>
            <th className="text-left py-3 font-medium">Website</th>
            <th className="text-left py-3 font-medium">Mobile App</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3">User Engagement</td>
            <td className="py-3">Medium</td>
            <td className="py-3 font-medium text-green-600">High (3× better)</td>
          </tr>
          <tr className="border-b">
            <td className="py-3">Push Notifications</td>
            <td className="py-3">Limited</td>
            <td className="py-3 font-medium text-green-600">Full Support</td>
          </tr>
          <tr>
            <td className="py-3">Development</td>
            <td className="py-3 font-medium text-green-600">Low Cost</td>
            <td className="py-3">Traditionally Expensive</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200">
        Why Convert to a Mobile App?
      </h3>
      <ul className="list-disc pl-6 space-y-3">
        <li><span className="font-medium">3× higher engagement</span> compared to mobile websites</li>
        <li><span className="font-medium">25% increase in repeat sales</span> through push notifications</li>
        <li><span className="font-medium text-red-600">No developer needed</span> - build it yourself in hours</li>
        <li>App Store presence <span className="font-medium">boosts credibility</span></li>
      </ul>
    </div>

    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200">
        Conclusion
      </h2>
      <p className="mb-6">
        AppMySite makes mobile apps <span className="font-bold">accessible for everyone</span>, eliminating the traditional barriers of cost and technical complexity. With the ability to <span className="bg-blue-100 px-1 rounded font-medium">convert your website in under 30 minutes</span>, there's never been a better time to expand your mobile presence.
      </p>
    </div>

    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
      <h3 className="text-xl font-bold mb-2">Ready to Launch Your App?</h3>
      <p className="mb-6 opacity-90">Join thousands of businesses who transformed their websites into apps</p>
      <a 
        href="https://www.appmysite.com" 
        className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-200"
      >
        Start now
      </a>
    </div>
  </div>
</main>
        <Footer />
    </div>
  )
}

export default page
