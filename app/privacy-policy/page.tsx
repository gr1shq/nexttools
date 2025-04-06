import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - NextTools</title>
        <meta name="description" content="NextTools privacy policy and data usage information" />
      </Head>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last updated: April 2025</p>

        <p className="mb-4">
          At <strong>NextTools</strong>, accessible from https://yourdomain.com, your privacy is very important to us. This Privacy Policy explains what information we collect and how we use it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Email addresses (only if you contact us)</li>
          <li>Anonymous website usage data through Google Analytics</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To respond to your inquiries</li>
          <li>To improve website content and user experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="mb-4">We use Google Analytics and affiliate platforms like PartnerStack and Glide. These services may collect anonymized usage data or track clicks.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
        <p className="mb-4">We may use cookies to improve your browsing experience and track affiliate links. You can disable cookies in your browser settings.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">You can request access to or deletion of your data by emailing us at <a href="mailto:gpentertainment28@gmail.com" className="text-blue-600 underline">gpentertainment28@gmail.com</a>.</p>

        <p>If we update this policy, changes will be posted here.</p>
      </section>
    </>
  );
};

export default PrivacyPolicy;