const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

// CORS sozlash - faqat http://localhost:5500 uchun
app.use(cors({ origin: "https://nt-react-09.vercel.app" }));

// Proxy sozlash
app.use(
  "/",
  createProxyMiddleware({
    target: "http://13.51.206.62:8000",
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  res.send("Proxy server ishga tushdi!");
});

app.listen(3000, () => {
  console.log("Server 3000-portda ishlamoqda");
});
