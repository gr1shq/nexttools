import Categories from "./(sections)/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./(sections)/Hero";
import Latest from "./(sections)/Latest";


export default function Home() {
  return (
    <div className="bg-[#f9fafb]">
      <header>
      <Header />
      </header>
      <main>
        <Hero />
        <Latest />
        <Categories />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
