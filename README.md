## Bucaniere. An admin panel for SailsJS apps.

![alt](https://raw.githubusercontent.com/lucafaggianelli/sails-hook-bucaniere/master/docs/dashboard.png)

# Install

```sh
npm i -S sails-hook-bucaniere
```

Access the admin panel at
[https://localhost:1337/admin](https://localhost:1337/admin)

# Usage

## Models

Browse yor models, click on the left menu to access a model and list entries.

![alt](https://raw.githubusercontent.com/lucafaggianelli/sails-hook-bucaniere/master/docs/model-list.png)

Click on them to edit or delete

![alt](https://raw.githubusercontent.com/lucafaggianelli/sails-hook-bucaniere/master/docs/model-edit.png)

## Email Templates

Render email templates in the browser, supplying variables to the template in JSON format
and send test email.

![alt](https://raw.githubusercontent.com/lucafaggianelli/sails-hook-bucaniere/master/docs/preview-template.png)

# Added acces check for super admins
```
// security/isSuperAdmin
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
```

# More features to come!

Bucaniere is still WIP, but in full development, please submit feature requests and issues, very appreciated!