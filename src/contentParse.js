//exports.contentParser = function (contentResponse, done){
function contentParser (done){
  var fs=require('fs');
  var data=fs.readFileSync('json/mraid.json');
  var contentUrls = new Array;

  json_data = JSON.parse(data);
  content = json_data['media']['000000000000000000000001']['content'];
  var contentData = content.split(',');
  //console.log(contentData);
  for(i = 0; i < contentData.length; i++) {
    if (/http/.test(contentData[i])){
      str = contentData[i].split('\": \"')[1];
      var matches = str.match(/https?\:\/\/\S+[^\'\"\}\{]/);
      contentUrls.push(matches[0]);
    }
  }
  return contentUrls;
};

contentParser();
