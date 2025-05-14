class userCtrl{
    async userSave(req,res,next){
        try{
           let UserData =  req.body.success 

            if(UserData){
                return res.status(200).send({message:"success"})
            }else{
                return res.status(400).send({message:"failed to create user"})
            }

        }catch(err){
            console.log(err)
            return res.status(500).send({message:"internal server error"})
        }
    }

}

module.exports = new userCtrl()