const express = require("express");
const router = express.Router();
// const adminServ = require("../../services/adminService");
// const { asyncHandler } = require("../getSendResult");

router.post(
    "/login",
    asyncHandler(async (req,res) => {
        // const result = await adminServ.login(req.body.loginId,req.body.loginPwd);
        // if(result){
            //登录成功
            res.cookie("token",result.id,{
                path:"/",
                domain:"localhost",
                maxAge:7 * 24 * 3600 * 1000,//毫秒数
            });
        // }
        // return result;
    })
)

module.exports = router;