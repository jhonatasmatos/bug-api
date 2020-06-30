export const environment = {
  port: process.env.PORT || 3000,
  db: process.env.DATABASE_URL || '',
  env: process.env.NODE_ENV || 'development',
};
