var express = require("express");

module.exports.isEmpty =  function(obj){
  for( var prop in obj){
    if(obj.hasOwnProperty(prop)){
      return false;
    }
  }
  return true;
}
