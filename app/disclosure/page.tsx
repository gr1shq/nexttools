import Head from 'next/head';

const AffiliateDisclosure = () => {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure - NextTools</title>
        <meta name="description" content="Our affiliate disclosure policy" />
      </Head>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Affiliate Disclosure</h1>

        <p className="mb-4">This website contains affiliate links. If you click one and make a purchase, we may earn a commission — at no extra cost to you.</p>

        <p className="mb-4">NextTools participates in affiliate programs like <strong>PartnerStack</strong> and <strong>Glide</strong>. We only promote tools that we believe provide value to our readers.</p>

        <p>Thank you for supporting our work!</p>
      </section>
    </>
  );
};

export default AffiliateDisclosure;