const db = require('../../database/models');


module.exports = {
    list: (req, res) => {
        db.Products.findAll({
            include: [{ association: 'category' }]
        })
        .then(productos => {return res.json(productos)})
        
    }
}

/* return res.json('hola') */