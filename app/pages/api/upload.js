import cloudinary from "cloudinary-react";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const file = req.body.file;
    cloudinary.v2.uploader.upload(file, (error, result) => {
      if (error) {
        console.error("Error uploading file:", error);
        res.status(500).json({ error: "Error uploading file" });
      } else {
        res.status(200).json({ file: result });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
