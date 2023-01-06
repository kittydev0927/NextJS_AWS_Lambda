import Head from 'next/head';
import { useEffect, useState } from 'react';

import { SEO_DEFAULTS } from '#constants/seoDefaults';

import type { SEOProps } from './SEO.types';

export const SEO: React.FC<SEOProps> = ({
  description = SEO_DEFAULTS.description,
  image = SEO_DEFAULTS.image,
  site = SEO_DEFAULTS.site,
  title = SEO_DEFAULTS.title,
  type = SEO_DEFAULTS.type,
  url = SEO_DEFAULTS.url,
  pageName = '',
}) => {
  // trigger page load event for analytics
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  // set environment for page data and Launch script
  let envText;
  if (typeof window !== 'undefined') {
    const envUrl = window?.location.href;
    if (envUrl.includes('localhost') || envUrl.includes('develop.') || envUrl.includes('ui.qa.')) {
      envText = 'development';
    } else if (envUrl.includes('ui.stage.')) {
      envText = 'staging';
    } else {
      envText = 'production';
    }
  }

  const pageData = `digitalData.push({
    "event": "page data",
    "page": {
      "name": "${pageName}",
    },
    "site": {
      "name":"rp",
      "environment":"${envText}",
      "languageCountry": "en-us",
      "version": "2.0.0212"
    },
  });`;

  return (
    <Head data-testid="seo">
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site} />
      <meta property="og:image" content={image} />
      <meta name="robots" content="noindex,nofollow" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          var digitalData = window.digitalData || [];
          digitalData.push({
              "event":"page init"
          });
      `,
        }}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: pageData,
        }}
      />
      {pageLoaded && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              digitalData.push({
                "event": "page load"});`,
          }}
        />
      )}
      <script src={process.env.NEXT_PUBLIC_ADOBE_LAUNCH} async />
    </Head>
  );
};
