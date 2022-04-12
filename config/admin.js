module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '413769b49dd1e9721fced2de0bb3d0e7'),
  },
});
