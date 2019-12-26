const { renderView } = require('./utils')
const { checkAccess} = require('../security/isSuperAdmin')

module.exports = async function (sails, req, res) {

  if(!await checkAccess(req,res)){
    return res.view(500)
  }

  const widgets = []

  for (const widget of sails.config.bucaniere.widgets) {
    widgets.push({
      ...widget,
      content: await sails.models[widget.model].count()
    })
  }

  renderView(res, 'pages/dashboard', { widgets })
}
