import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: "ok",
    version: process.env.NEXT_PUBLIC_GIT_SHA || "unknown",
  });
}
