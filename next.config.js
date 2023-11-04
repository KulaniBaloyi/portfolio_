/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns:[
        {
            protocol: 'https',
            hostname: 'websitedemos.net',
          
          },
          {
            protocol:"https",
            hostname:"images.ctfassets.net"
          }
        
        ]
    }
}

module.exports = nextConfig
