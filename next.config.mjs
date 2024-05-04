/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true
	},
	webpack(config) {
		config.module.rules.push({
		  test: /\.svg$/,
		  issuer: /\.[jt]sx?$/,
		  use: ['@svgr/webpack', 'url-loader'],
		})
	
		config.resolve.fallback = {
		  ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
		  // by next.js will be dropped. Doesn't make much sense, but how it is
		  fs: false, // the solution
		  path: false
		};
	
	
		return config
	  },
};

export default nextConfig;
