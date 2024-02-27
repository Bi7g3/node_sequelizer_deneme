const User = require('../models');
const Validator = require('validator');

module.exports = {

    create: async (req, res) => {
        const { full_name, email, phone_number } = req.body
        const createDto = new Validator(req.body, {

            full_name:'required|string|min:1|max:255',
            email:'required|string|min:1|max:255',
            phone_number:'required|string|min:1|max:255'
        })
        if(createDto.fails()){
            return res.send(400).json({
                message:createDto.errors.all()
            })
        }

        await User.create({
            full_name,
            email,
            phone_number
        })
        

    }

}