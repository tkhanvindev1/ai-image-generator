import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "..//mongodb/models/post.js";


dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get
router.route("/").get(async(req,res) => {
  console.log('Mongodb GET End-point hit!')
    try{
        const posts = await Post.find({});
        res.status(200).json({ sucess: true, data: posts })
    }catch (error) {
        res.status(500).json({ sucess: false, message: error })
    }
})

//post
router.route("/").post(async (req, res) => {
  console.log('Mongodb POST End-point hit! ')
  try {

    const { id,name,prompt,photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      userId:id,
      name: name,
      prompt,
      photo: photoUrl.url,
    });
    console.log(newPost)
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});
export default router;
