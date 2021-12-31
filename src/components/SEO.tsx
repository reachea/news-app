import React from "react";
import Head from "next/head";

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
};

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  image,
}) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" href="/favicon.png" type="image/x-icon " />

    <title>{title ? title + " | moc.gov.kh" : "moc.gov.kh"}</title>
    {image ? (
      <meta property="og:image" content={`${image}`} />
    ) : (
      <meta property="og:image" content={`/banner.jpg`} />
    )}
    <meta
      name="description"
      content={
        description ||
        `  
        ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្មធ្វើពិពិធកម្មទីផ្សារថ្មីៗនិង
        បន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់ 
        កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ Sector វិស័យឯកជននិងផលប្រយោជន៍ប្រជាជនកម្ពុជា។`
      }
    />
    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content={title ? title + " | moc.gov.kh" : "moc.gov.kh"}
    />
    <meta
      name="og:description"
      property="og:description"
      content={
        description ||
        `  
        ខ្ញុំមានសេចក្តីរីករាយសូមជម្រាបជូនថាបេសកកម្មរបស់ក្រសួងគឺផ្តល់ជូនសាធារណៈជននូវរាល់សេវាកម្មទាក់ទងនឹងពាណិជ្ជកម្មធ្វើពិពិធកម្មទីផ្សារថ្មីៗនិង
        បន្តអនុវត្តគោលនយោបាយពាណិជ្ជកម្មរបស់ 
        កម្ពុជាដើម្បីផលប្រយោជន៍ដ៏ធំធេងនៃការអភិវឌ្ឍ Sector វិស័យឯកជននិងផលប្រយោជន៍ប្រជាជនកម្ពុជា។`
      }
    />

    <meta property="og:site_name" content="moc.gov.kh" />
    <meta
      property="og:url"
      content={`${canonical ? canonical : "moc.gov.kh"}`}
    />

    {canonical && (
      <link rel="canonical" href={`${canonical ? canonical : "moc.gov.kh"}`} />
    )}

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="apple-mobile-web-app-title" content="loktomninh" />
    <meta name="application-name" content="loktomninh" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);
