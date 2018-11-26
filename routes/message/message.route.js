//Imports et confings
const express = require('express');
const MessageRouter = express.Router({ mergeParams: true });
const {createMessage,DeleteMessage,ReadMessage} = require('./message.controller')
const { checkFields } = require('../../services/request.checker');
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');


//Routes
class MessageRouterClass{
    routes(){
 
        
        //send
        MessageRouter.post('/send', (req,res) => {
            if( typeof req.body === 'undefined' || req.body === null ) sendBodyError( res, 'No body data provided' );

                // Check for mandatories
                const { miss, extra, ok } = checkFields(['id_message','id_user','message','date'], req.body);
                
                // Check oppropriated values
                if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) };
                createMessage(req.body)
                 .then( apiResponse => sendApiSuccessResponse(res,'Message received',apiResponse) )
                 .catch( apiResponse => sendApiErrorResponse(res,'Message not received',apiResponse) )
            
        });


        //Delete
        MessageRouter.delete('/DeleteMessage ', (req,res) => {

            if( typeof req.body === 'undefined' || req.body === null ) sendBodyError( res, 'No body data provided' );

            // Check for mandatories
            const { miss, extra, ok } = checkFields(['user_id'], req.body);
        
            // Check oppropriated values
            if( !ok ){ sendFieldsError( res, 'Bad fields provided', miss, extra ) }

 
            DeleteMessage(id_message)
            .then( apiResponse => sendApiSuccessResponse(res,'Message received',apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res,'Message not received',apiResponse) )
        });


        // Read message
        MessageRouter.get('/readmessage', (req,res) => {
            ReadMessage()
            .then( apiResponse => sendApiSuccessResponse(res,'Message received',apiResponse) )
            .catch( apiResponse => sendApiErrorResponse(res,'Message not received',apiResponse) )
        });
    }
    init(){
        this.routes();
        return MessageRouter;
    }
}


//Exports
module.exports = MessageRouterClass;