var sequelize = require('../common/mysql');
var Chat = require("../model/ChatModel");

module.exports.getAllMessages = function (reciever_id, sender_id,product_id, callback) {
  var statement = "SELECT users.matrikel_number,users.first_name,users.last_name,chat.message\
     FROM sell_it.chat,sell_it.users\
      where chat.sender_id="+ reciever_id + " and chat.receiver_id=" + sender_id + " and chat.product_id=" + product_id + " and chat.sender_id=users.matrikel_number \
        or chat.sender_id="+ sender_id + " and chat.receiver_id=" + reciever_id + " and chat.product_id=" + product_id + " and chat.sender_id=users.matrikel_number";
  sequelize.query(statement).spread((data) => {
    callback(data);
  });

}

module.exports.getAllCommunications = function(matrikel_number,callback){
  var statement = "SELECT users.matrikel_number,users.first_name,users.last_name,ANY_VALUE(products.name) as product_name\
  FROM sell_it.chat,sell_it.users ,sell_it.products \
  where ((chat.sender_id=users.matrikel_number and chat.receiver_id="+matrikel_number+")   or \
  (chat.sender_id="+matrikel_number+" and chat.receiver_id=users.matrikel_number)) and sell_it.products.product_id = sell_it.chat.chat_id \
  GROUP BY users.matrikel_number;";
      sequelize.query(statement).spread((data) => {
          callback(data);
      });
}

module.exports.sendMessage = function (message, callback) {
	Chat.build(message).save().then((data) => {
	  console.log(data.dataValues);
	  callback(data.dataValues);
	}).catch((err) => {
    console.log(err);
	  callback(err);
	})
  }
