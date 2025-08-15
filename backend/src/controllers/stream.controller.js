import fetch from "node-fetch"; // Only needed if Node < 18
import dotenv from "dotenv";
dotenv.config();

const STREAM_URL = process.env.STREAM_URL;

// JSON metadata endpoint
export const getStreamInfo = (req, res) => {
  res.json({
    name: "My Awesome Radio",
    description: "24/7 hits and awesome tunes.",
    stream_url: `http://localhost:${process.env.PORT}/api/radio` // Proxy URL
  });
};

// CORS proxy endpoint for actual audio streaming
export const proxyStream = async (req, res) => {
  try {
    const response = await fetch(STREAM_URL);
    res.setHeader("Content-Type", response.headers.get("content-type"));
    response.body.pipe(res); // Stream to client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching stream" });
  }
};
