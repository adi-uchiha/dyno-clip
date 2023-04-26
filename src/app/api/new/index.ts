import dbConnect from "@/lib/dbConnet";
import Clip from "@/models/Clip";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const clip = await Clip.create(
          req.body
        )
        res.status(201).json({success: true, data: clip})
      } catch (error) {
        res.status(400).json({success: false})
      }
      break;
    default:
      res.status(400).json({success: false})
      break;
  }
} 
