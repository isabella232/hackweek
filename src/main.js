var httpClient = require('./auctionResVeri.js')
var baseURL = 'http://fake-ads-backend.applifier.info/'
var adsType = 'mraid_brands'
var setupURL = baseURL+'setup/'+adsType
var gameID_mraid = httpClient.httpGet(setupURL).game_id

//var gameID_mraid=10074
console.log("mraid:::"+gameID_mraid);
var auctionRes = httpClient.getAuctionRes(baseURL,gameID_mraid);
console.log("correlationID:"+auctionRes.correlationId);
