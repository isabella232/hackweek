function parse(contentType, data){
  var fs = require('fs');
  var contentUrls = new Array;

  json_data = JSON.parse(data);
  Object.keys(json_data).forEach(function(k) {
    if (/http/.test(json_data[k])){
      var matches = json_data[k].match(/https?\:\/\/\S+[^\'\"\}\{]/);
      contentUrls.push(matches[0]);
    }
  });
  return contentUrls;
};

module.exports = parse;
