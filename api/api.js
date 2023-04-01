const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://maps.googleapis.com',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = 'https://pomodoro-life.vercel.app';
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE';
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  }
}));

module.exports = app;

/*
 sets up a proxy server using the express.js server 
 uses http-proxy-middleware package to create a middleware function
 the middleware function intercepts request to the '/api' route and forwards them to the target URL
 the "changeOrigin" options is set to true to ensure that the original request headers are 
 forwarded with the proxied request
*/