const mongoose = require("../config/mongodb")

const productsSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"El campo es obligatorio"],
        minLength:3
    },
    price:{
        type:Number,
        required:[true,"El campo es obligatorio"],
        min:[0,"El precio debe ser mayor a 0"],
        get: function(value){
            return value * 1.21
        },
        // set: function(value){
        //     return value * 1.21
        // }
    },
    description:String,
    quantity:Number,
    status:String,
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    },
    detacado:Boolean
})

productsSchema.virtual("price_currency").get(function(){
    return `$ ${this.price}`
})

productsSchema.set("toJSON",{getters:true,setters:true,virtuals:true})

module.exports = mongoose.model("productos",productsSchema)