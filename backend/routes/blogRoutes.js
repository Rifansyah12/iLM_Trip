import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js";

const route = express.Router();

route.get("/blogs", getBlogs);
route.get("/blogs/:id", getBlogById);
route.post("/blogs", createBlog);
route.put("/blogs/:id", updateBlog);
route.delete("/blogs/:id", deleteBlog);

export default route;
