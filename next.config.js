/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns:[
        {
            protocol: 'https',
            hostname: 'websitedemos.net',
          
          },
        
        ]
    }
}

module.exports = nextConfig
