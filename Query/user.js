
const userController = require('../Controller/user')
const userModel = require('../Model/usermodel')
class userQuery {
    async insertUserDetails(req,res,next){
        try{
            let data = req.body
            let oldUser = await userModel.find({
                name:data.name,
                PhoneNumber:data.number
            })

            if(oldData & oldData.length > 0){
                throw 
            }

            let UserData = await userModel.create(data)
            if(UserData){
                req.body.success = UserData
            }else{
                throw res.send(err)
            }

        }catch(err){
            console.log(err)
        }
    }

}

module.exports  =  new userQuery()