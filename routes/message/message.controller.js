//Imports
const MessageModel = require('../../models/message.model')



//Functions
//Create message
const createMessage = body => {
        return new Promise( (resolve, reject) => {
            // Save user
            MessageModel.create(body, (error, newMessage) => {
            if(error){ // Mongo error
                return reject(error)
            }
            else{ // message OK
                return resolve(newMessage);
            };
        });
    });
};

//  Read Message
const ReadMessage = () => {
    return new Promise( (resolve, reject) => {
        MessageModel.find({date: Date.now}, (error, newMessage) => {
            if(error){ // Mongo error
                return reject(error)
            }
            else{ // Message deleted
                return resolve(newMessage);
            };
        });
    });
}


// Delete Message
const DeleteMessage = (id) => {
    return new Promise( (resolve, reject) => {
        MessageModel.deleteOne(ObjectId(id), (error, newMessage) => {
            if(error){ // Mongo error
                return reject(error)
            }
            else{ // Message deleted
                return resolve(newMessage);
            };
        });
    });
}


//Exports
module.exports = {
    createMessage,
    DeleteMessage,
    ReadMessage
}