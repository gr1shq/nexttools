import Head from 'next/head';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - NextTools</title>
        <meta name="description" content="Terms and conditions for using NextTools" />
      </Head>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

        <p className="mb-4">Welcome to <strong>NextTools</strong>. By accessing this website, you agree to the following terms and conditions.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Site</h2>
        <p className="mb-4">All content is provided for informational purposes only. You may not copy, reuse, or distribute it without permission.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. No Guarantees</h2>
        <p className="mb-4">We do our best to keep the content accurate and helpful, but we make no guarantees regarding the success or outcome from using recommended tools.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Affiliate Links</h2>
        <p className="mb-4">Some links are affiliate links. We may earn commissions at no extra cost to you.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
        <p className="mb-4">We reserve the right to change these terms at any time. Continued use of the site means you agree to the new terms.</p>

        <p className="mb-4">For questions, contact us at <a href="mailto:gpentertainment28@gmail.com" className="text-blue-600 underline">gpentertainment28@gmail.com</a>.</p>
      </section>
    </>
  );
};

export default TermsOfService;