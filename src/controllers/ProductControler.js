const database = require("../database/connection")

class ProductControler {
    newOferr(req, res){
        const {category, product_Name, value, imageURL} = req.body
    
        database.insert({category, product_Name, value, imageURL}).table("produto").then(data =>{
            res.json({id, category, product_Name, value, imageURL})
            return res.status(201)
        }).catch(error =>{
            return res.send(error)
        })
    }

    listOffers(req, res){
        database.select("*").table("produto").then(data =>{
            res.json(data)
            return res.status(200).json()
        }).catch(error =>{
            return res.send(error)
        })
    }
}

module.exports = new ProductControler()