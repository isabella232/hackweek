function parse(contentType, data){
  var fs = require('fs');
  var contentUrls = new Array;

  switch(contentType){
    case "programmatic/mraid": //for content with JSON
    case "programmatic/mraid-url":
      json_data = JSON.parse(data);

      Object.keys(json_data).forEach(function(k) {  
        if (/http/.test(json_data[k])){
          var matches = json_data[k].match(/https?\:\/\/\S+[^\'\"\}\{]/);
          contentUrls.push(matches[0]);
        }
      });
      break;

    case "programmatic/vast": //encoded vast xml tag
      break;

    case "programmatic/admob-video": //html
      break;    

    case "programmatic/vast-paid": //vast tag 
      break;
      
    case "programmatic/static-interstitial": //Display: {clickThroughURL}??;json, markup contents encoded html
      break;

    case "comet/campaign": //creativeUrl only; adType=MRAID  
    //for comet/campaign, different type use same contentType, all JSON, videoEventUrls is JSON Obj
      json_data = JSON.parse(data);
    
      Object.keys(json_data).forEach(function(k) {  //bug: comet mraid nested json is not handled: {"videoEventUrls\": { \"video_start\"...
        if (/http/.test(json_data[k])){
          var matches = json_data[k].match(/https?\:\/\/\S+[^\'\"\}\{]/);
          contentUrls.push(matches[0]);
        }
      });
      break;

  }
 
  return contentUrls;
};

module.exports = parse;
