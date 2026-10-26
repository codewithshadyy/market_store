// src/config/index.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET, 
  corsOrigins: (process.env.CORS_ORIGINS || '').split(',').filter(Boolean),
  services: {
    product: process.env.PRODUCT_SERVICE_URL || 'http://localhost:8004',
    auth: process.env.AUTH_SERVICE_URL || 'http://localhost:8002',
  },
};