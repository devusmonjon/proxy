const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Proxy sozlash
app.use(
  "/",
  createProxyMiddleware({
    target: "https://xnxx.xxx",
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  res.send("Proxy server ishga tushdi!");
});

app.listen(3000, () => {
  console.log("Server 3000-portda ishlamoqda");
});
