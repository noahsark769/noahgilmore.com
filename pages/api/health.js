export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    version: process.env.NEXT_PUBLIC_GIT_SHA || "unknown",
  });
}
