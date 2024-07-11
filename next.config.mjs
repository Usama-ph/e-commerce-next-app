/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_URL:"file:./dev.db",
        ADMIN_USERNAME:"admin",
        HASHED_ADMIN_PASSWORD:"sQnzu7wkTrgkQZF+0G1hi5AI3Qmzvv0bXgc5THBqi7mAsdd4Xll27ASbRt9fEyavWi6m0QP9B8lThf+rDKy8hg==",
        AUTH0_SECRET:'G3cZVhUfTtzuUfgA1LPvaszEXbaPjlIPuhh4XjGoFzFSdBnqMwDinmldKvZB5nDn',
        AUTH0_BASE_URL:'http://localhost:3000',
        AUTH0_ISSUER_BASE_URL:'https://dev-cm1nexwagw3z3ksk.us.auth0.com',
        AUTH0_CLIENT_ID:'satgpq5EKY7VYKQJhVMBz4iogD9lbAeJ',
        AUTH0_CLIENT_SECRET:'G3cZVhUfTtzuUfgA1LPvaszEXbaPjlIPuhh4XjGoFzFSdBnqMwDinmldKvZB5nDn'
      }
};

export default nextConfig;
