import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

const page = () => {
  return (
    <div className="">
        <header>
            <Header />
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">
  {/* Hero Section */}
  <div className="border-l-4 border-blue-500 pl-4 mb-10 mt-[100px]">
    <h1 className="text-3xl font-bold mb-4">The Mobile App Advantage You are Missing in 2025</h1>
    <p className="text-lg">
      You might think your website is enough, but if you are not using mobile apps — you are missing out on <span className="font-bold text-blue-600">huge growth potential</span>.
    </p>
  </div>

  {/* Benefits Grid */}
  <div className="grid md:grid-cols-2 gap-6 mb-12">
    {/* Benefit 1 */}
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex items-start mb-3">
        <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
        <h2 className="text-xl font-semibold">Mobile Dominates Web Traffic</h2>
      </div>
      <p>
        Over <span className="font-bold">60% of internet traffic</span> comes from mobile devices. Apps load <span className="font-semibold text-green-600">40% faster</span> than mobile websites and provide superior user experiences.
      </p>
    </div>

    {/* Benefit 2 */}
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex items-start mb-3">
        <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
        <h2 className="text-xl font-semibold">Push Notifications Drive Sales</h2>
      </div>
      <p>
        Send <span className="font-bold">targeted messages</span> directly to users lock screens — discounts, updates, and reminders achieve <span className="font-semibold text-green-600">25-30% higher conversion</span> rates than email.
      </p>
    </div>

    {/* Benefit 3 */}
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex items-start mb-3">
        <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
        <h2 className="text-xl font-semibold">Enhanced Brand Loyalty</h2>
      </div>
      <p>
        Users keep apps installed <span className="font-bold">3× longer</span> than they bookmark websites. Constant home screen presence builds <span className="font-semibold text-green-600">long-term recognition</span>.
      </p>
    </div>

    {/* Benefit 4 */}
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="flex items-start mb-3">
        <span className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
        <h2 className="text-xl font-semibold">Level the Playing Field</h2>
      </div>
      <p>
        With platforms like <span className="font-bold">AppMySite</span> and <span className="font-bold">Glide</span>, small businesses can deploy <span className="font-semibold text-green-600">professional-grade apps</span> that compete with enterprise solutions.
      </p>
    </div>
  </div>

  {/* Implementation Section */}
  <div className="bg-blue-50 rounded-xl p-6 mb-10">
    <h2 className="text-2xl font-bold mb-4">Simplified App Development</h2>
    <p className="mb-4">
      Modern no-code platforms have eliminated traditional barriers:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="font-medium">No developers needed</span> — intuitive visual builders</li>
      <li><span className="font-medium">Launch in days</span>, not months</li>
      <li><span className="font-medium">Cost-effective</span> solutions starting under $50/month</li>
      <li><span className="font-medium">Automatic updates</span> without resubmitting to app stores</li>
    </ul>
  </div>

  {/* Conclusion */}
  <div className="border-t border-b border-gray-200 py-6 mb-10">
    <h2 className="text-2xl font-bold mb-4">Strategic Imperative</h2>
    <p className="mb-4">
      Mobile apps are no longer optional for businesses serious about growth. The combination of <span className="font-semibold">better engagement</span>, <span className="font-semibold">higher conversions</span>, and <span className="font-semibold">brand visibility</span> makes them essential in 2025.
    </p>
    <p>
      Platforms like <span className="font-bold text-blue-600">AppMySite</span> make this transition accessible to any website owner.
    </p>
  </div>

  {/* CTA */}
  <div className="text-center">
    <a 
      href="https://www.appmysite.com" 
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
    >
      Start Your Mobile Transformation Today
    </a>
  </div>
</main>
<footer>
    <Footer />
</footer>
    </div>
  )
}

export default page
