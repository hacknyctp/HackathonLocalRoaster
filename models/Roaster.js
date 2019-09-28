const mongoose = require('mongoose');

const roasterSchema = mongoose.Schema({
      location: {
        type: String,
        required: true
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