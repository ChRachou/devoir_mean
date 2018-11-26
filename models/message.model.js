//Imports & configs
const mongoose = require('mongoose');
const { Schema } = mongoose;
//


//Model definition d'un message
const messageSchema = new Schema({
    id_message: String,
    id_user: String,
    message: String,
    date: {type: Date,
        default: Date.now
      }
})

//Exports
const messageModel = mongoose.model('message', messageSchema);
module.exports = messageModel;
 