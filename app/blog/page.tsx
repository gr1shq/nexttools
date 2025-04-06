import BlogHero from "../(sections)/BlogHero"
import Footer from "../components/Footer"
import Header from "../components/Header"

const page = () => {
  return (
    <div className="bg-[#f9fafb]">
        <header>
            <Header />
        </header>
        <main>
            <BlogHero />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default page
