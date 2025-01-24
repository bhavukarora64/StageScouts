const jwt = require('jsonwebtoken');
const {v4: uuid4} =  require('uuid');
const bcrypt = require('bcryptjs')
require("dotenv").config();

function userAuth(req, res, next){
    try{
        const {authorization} = req.headers;
        console.log("Checking User Auth...")

        if(!authorization){
            return res.status(401).json({
                "error": 'JWT Does not exists, Please Re-Login'
            })
        }

        const response = jwt.verify(authorization, process.env.JWT_SECRET, (err, result) => {
            if(err){
                return res.status(401).json({
                    "error": 'JWT Expired or Does not exists, Please Re-Login'
                })
            }

            return result;
        });
        
        if(response){
            req.db.query('SELECT UserId from Users WHERE UserId = ?', [response.userId], (err, userRecord) => {
                if(err){
                    return res.status(500).json({
                                "error":  "Something Went Wrong, Please try again after refreshing the page!"
                            })
                }

                if(!userRecord[0].UserId || !response.userId){
                    return res.status(500).json({
                        "error":  "Something Went Wrong, Please try again after refreshing the page!"
                    })
                }

                if(userRecord[0].UserId == response.userId){
                    req.body.UserId = response.userId;
                    next();
                }else{
                    return res.status(404).json({
                        "error": 'User Does not exist!'
                    })
                }
            })
        }else{
            return res.status(401).json({
                "error": 'JWT Expired or Does not exists, Please Re-Login'
            })
        }
    }catch(e){
       return res.status(500).json({
            "error":  "Something Went Wrong, Please try again after refreshing the page!"
        })
    }
    
}

module.exports = {
    userAuth        
};