import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Quantumtech Solution</title>
        <meta
          name="description"
          content="Quantumtech Solution provides services like web development, SEO, digital marketing, brand advertising, mobile app development using latest technologies like Next.js, React, Tailwind CSS, Figma, Strapi, Node.js, MongoDB, Firebase, MERN stack, Full Stack, WordPress, React Native, Shopify, Android, Ios, Mobile optimization, Responsive Design"
        />
        <meta
          name="keywords"
          content="Quantum, QuantumTech, Quantum tech solution, Quantumtech solutions, web development, SEO, digital marketing, brand advertising, mobile app, Next.js, React, Tailwind CSS, Figma, Strapi, Node.js, MongoDB, Firebase, MERN stack, Full Stack, WordPress, React Native, Shopify, Android, Ios, Mobile optimization, Responsive Design, Payment Gateway, Razorpay, stripe, Billdesk, paytm integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Quantumtech Solution" />
        <link rel="canonical" href="https://www.quantumtechsolution.in/" />
        <link
          rel="alternate"
          href="https://www.quantumtechsolution.in/"
          hreflang="en"
        />
        <link rel="shortlink" href="https://www.quantumtechsolution.in/" />
        <link
          rel="alternate"
          type="application/json+oembed"
          href="https://www.quantumtechsolution.in/oembed.json"
        />
        <link
          rel="alternate"
          type="text/xml+oembed"
          href="https://www.quantumtechsolution.in/oembed.xml"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quantumtech Solution",
            "url": "https://www.quantumtechsolution.in",
            "logo": "https://www.quantumtechsolution.in/logo.png",
            "sameAs": [
              "https://www.facebook.com/quantumtechsolution",
              "https://www.twitter.com/quantumtechsolution",
              "https://www.instagram.com/quantumtechsolution"
            ]
          }`}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
