module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1122fd4d748f2ac1f0055d74d4e87e9d'),
  },
});
