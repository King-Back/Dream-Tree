const User=require("../dbs/Model/user");

exports.register = function (req, res) {
    const user=new User({
        username:req.body.username,
        password:req.body.password
    });

    user.save(function (err) {
        if(err){
            return res.status(500).json(err.message);
        }else{
            return res.status(200).json("register success");
        }
    })
};
