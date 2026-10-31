



class Authorize{

     roleCheck(...allowedRoles){

        return (req, res, next) => {

            if(!req.user){
                return res.status(401).json({
                    succcess:false,
                    message:"Authentication required"
                })
            }

            const userRoles = req.user.roles || []

            const hasPermission = allowedRoles.some(role => userRoles.includes(role))


            if(!hasPermission){

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