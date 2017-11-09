var httpClient = require('./auctionResVeri.js')
var baseURL = 'http://fake-ads-backend.applifier.info/'
//var baseURL = 'http://localhost:4567/'
var adsType = 'mraid_brands'
var setupURL = baseURL+'setup/'+adsType
//var gameID_mraid = httpClient.httpGet(setupURL).game_id

var gameID_mraid=10006
console.log("mraid:::"+gameID_mraid);

//var auctionRes = httpClient.getAuctionRes(baseURL,gameID_mraid);
//console.log("correlationID:"+auctionRes.correlationId);
var url = baseURL+'/v4/games/'+gameID_mraid+'/requests?platform=ios';
var urlList = httpClient.getAuctionRes(url);

var urlBroken = new Array()
for(var i=0; i<urlList.length; i++){
  console.log(urlList[i]);
    httpClient.verifyURL(urlList[i], function(obj){
        if(obj!=true){
            urlBroken.push(obj)
        }
    });
}

if(urlBroken.length!=0){
    console.log("Broken URLs::")
    for(var i=0; i<urlBroken.length; i++){
        console.log(urlBroken[i])
    }
}

console.log("URLs verified:"+urlList.length+"; URLs Brokedn:"+urlBroken.length);
