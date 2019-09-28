const mongoose = require('mongoose');

const roasterSchema = mongoose.Schema({
      location: {
        zipcode: Number,
        address: String,
      },
      coffee: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
})


module.exports = mongoose.model('roaster', roasterSchema)