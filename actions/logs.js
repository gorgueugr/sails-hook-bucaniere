const path = require('path')
const { renderView } = require('./utils')
const { checkAccess} = require('../security/isSuperAdmin')

module.exports = async function (sails, req, res) {
  if(!await checkAccess(req,res)){
    return res.view(500)
  }

  if (req.param('action') === 'read') {
    // the path ./ is relative to sails main app, not to this hook
    const logAbsolutePath = path.resolve('./', sails.config.bucaniere.logfile)

    // try {
    return res.sendFile(logAbsolutePath)
    // } catch (e) {
    //   sails.log.error(e)
    // }
  }

  return renderView(res, 'pages/logs', {
    logfile: sails.config.bucaniere.logfile
  })
}
