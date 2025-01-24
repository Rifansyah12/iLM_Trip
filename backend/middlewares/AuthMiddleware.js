import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next)=>{
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token) return res.status(401).json({msg: "Akses ditolak, Token tidak ditemukan"});

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(403).json({msg: "Token Tidak Valid"});
  }
}