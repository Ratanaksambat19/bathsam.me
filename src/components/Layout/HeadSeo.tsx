import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { getDomain } from 'util/dev';
import { seo } from 'types/interface/seo';

export default function HeadNextSeo({
  linkTo,
  seo,
}: {
  linkTo: string;
  seo: seo;
}) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicons/favicon.ico"
        />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={seo?.title}
        description={
          seo?.description !== ''
            ? seo?.description
            : 'A short description goes here.'
        }
        canonical={`${getDomain()}${linkTo}`}
        openGraph={{
          url: `${getDomain()}${linkTo}`,
          title: seo?.title,
          description:
            seo?.description !== ''
              ? seo?.description
              : 'A short description goes here.',
          images: [{ url: `${getDomain()}${seo?.images}` }],
          site_name: 'Doung ratanaksambat',
          type: 'website',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
    </div>
  );
}
