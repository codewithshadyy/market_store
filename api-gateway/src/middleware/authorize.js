



class Authorize{

    async roleCheck(...allowedRoles){

        return (req, res, next) => {

            if(!req.user){
                return res.status(401).json({
                    succcess:false,
                    message:"Authentication required"
                })
            }


            if(!allowedRoles.includes(req.user.role)){

                return res.status(403).json({
                    success:false,
                    message:"You are not allowed to perform this action"
                })
            }

            next()
        }
    }
}

module.exports = new Authorize()