import { Helmet } from 'react-helmet-async';

export const SEOHead = ({
	title,
	description,
	canonicalUrl,
	ogImage = '/hero.png',
	ogType = 'website',
	twitterCard = 'summary_large_image',
	keywords,
	author = 'The Virtual Greens',
	robots = 'index, follow'
}) => {
	const siteUrl = 'https://www.thevirtualgreens.com';
	const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
	const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			<meta name="author" content={author} />
			<meta name="robots" content={robots} />
			<link rel="canonical" href={fullCanonicalUrl} />

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={ogType} />
			<meta property="og:url" content={fullCanonicalUrl} />
			<meta property="og:image" content={fullOgImage} />
			<meta property="og:image:alt" content={title} />
			<meta property="og:site_name" content="The Virtual Greens" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={fullOgImage} />
			<meta name="twitter:image:alt" content={title} />

			{/* Additional Meta Tags */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#009444" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
		</Helmet>
	);
};