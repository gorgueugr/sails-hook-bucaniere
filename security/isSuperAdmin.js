async function checkAccess(req, res) {
    if(!req.session.userId)
        return false
    var user = await User.findOne({id:req.session.userId})
    if(user.isSuperAdmin){
        return true;
    }

    return false;

  }
  
  module.exports = {
    checkAccess
  }