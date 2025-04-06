import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-700 py-10 mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">
          {/* Column 1: About */}
          <div>
            <h4 className="font-bold text-lg">NextTools</h4>
            <p className="mt-2 text-sm">
              Discover the best no-code tools and resources to build your online business — fast.
            </p>
          </div>
          
          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-lg">Explore</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><a href="/categories" className="hover:underline">Categories</a></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h4 className="font-bold text-lg">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/disclosure" className="hover:underline">Affiliate Disclosure</a></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-lg">Stay Updated</h4>
            <form className="mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full p-2 border rounded mb-2" 
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        <div className="text-center text-xs mt-10 text-gray-400">
          © {new Date().getFullYear()} NextTools. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;