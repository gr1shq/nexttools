import Footer from "../components/Footer"
import Header from "../components/Header"

import Head from 'next/head';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
    <header>
      <Header />
    </header>
      <Head>
        <title>About NextTools - No-Code Resource Hub</title>
        <meta name="description" content="Learn about our mission to democratize online business creation through no-code tools" />
      </Head>

      <main className="max-w-4xl mx-auto py-16 xl:px-30 lg:px-20 md:px-15 px-10">
        {/* Hero Section */}
        <section className="text-center mb-16 mt-[100px]">
          <h1 className="text-4xl font-bold mb-4">
            About <span className="text-blue-600">NextTools</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering creators to build their online empire without writing a single line of code
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4">
                NextTools was born from a simple idea: <span className="font-semibold">technology should be accessible to everyone</span>. 
                In 2025, we set out to create the web's most comprehensive resource for no-code builders.
              </p>
              <p>
                We test and review hundreds of tools so you don't have to. Our team of digital entrepreneurs 
                verifies every recommendation before it reaches you.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Accessibility",
                desc: "Breaking down technical barriers for all creators"
              },
              {
                title: "Transparency",
                desc: "Unbiased reviews with real testing data"
              },
              {
                title: "Innovation",
                desc: "Tracking the latest no-code advancements"
              }
            ].map((value, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Build Without Code?</h2>
          <Link href="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
            Explore Our Resources
          </Link>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AboutPage;