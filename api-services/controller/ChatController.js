var sequelize = require('../common/mysql');

  module.exports.getAllMessages = function(reciever_id,sender_id,callback){
    var statement = "SELECT users.matrikel_number,users.first_name,users.last_name,chat.message\
     FROM sell_it.chat,sell_it.users\
      where chat.sender_id=82 and chat.receiver_id=83 \
        or chat.sender_id="+sender_id+" and chat.receiver_id="+reciever_id;
        sequelize.query(statement).spread((data) => {
            callback(data);
        });
  
  }
  
