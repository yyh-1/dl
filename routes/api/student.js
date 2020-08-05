const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    console.log("1")
    res.send("获取学生")
})

router.post("/hh",(req,res) => {
    console.log("2");
    res.send("提交学生")
})

module.exports = router;