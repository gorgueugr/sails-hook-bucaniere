const { renderView } = require('./utils')
const { checkAccess} = require('../security/isSuperAdmin')

module.exports = async function (sails, req, res) {
  if(!await checkAccess(req,res)){
    return res.view(500)
  }

  const model = req.param('model')
  const total = await sails.models[model].count()
  const all = await sails.models[model].find({ limit: 25 })

  renderView(res, 'pages/list', {
    all,
    attributes: sails.models[model].attributes,
    model,
    total
  })
}
