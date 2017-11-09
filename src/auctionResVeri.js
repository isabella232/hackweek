
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var auctionRes;

module.exports = {
httpGet : function (theUrl){
    console.log("url for setting up:"+theUrl)
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl,false);
    xmlHttp.send(null);

    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
        return JSON.parse(xmlHttp.responseText)
    }else{
        return 
    }
},
getAuctionRes : function (baseURL, gameID){
    var url = baseURL+'/v4/games/'+gameID+'/requests?platform=ios';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",url,false);
    xmlHttp.send(null);

    auctionRes = JSON.parse(xmlHttp.responseText);
    //return xmlHttp.responseText;
    //var correlationId = correlationId;
    console.log("correlationId: "+correlationId())
    var trackingURLs = getTrackingURLs(); 
    return trackingURLs;

},

verifyURL : function (theUrl,callback){
   //console.log("url for setting up:"+theUrl)
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl,false);
    xmlHttp.send(null);

    if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
        return callback(true)
    }else{
        callback(theUrl+";ERROR CODE:"+xmlHttp.status)
    }
},
getTrackingURLs

};

var getTrackingURLs = function (){
    var urlList = new Array();
    var placementsList = placements();
    
    for(var x in placementsList){
        var placementId = placementsList[x];
        console.log("placemtn##:" + placementId)
        
        recursiveGetProperty(auctionRes.media, placementId, function(obj){
            placementBody = JSON.stringify(obj)
            contentType = JSON.parse(placementBody).contentType
            content = JSON.parse(placementBody).content

            var contentParsered = {}
           // contentParsered = contentParser(contentType, content) //Calling Content parser, return a array
            // for(x in contentParsered){
            //     urlList.push(contentParsered[x])
            // }
            var trackingUrls = JSON.parse(placementBody).trackingUrls
           
            for(key in trackingUrls){
                var urls = trackingUrls[key]
                for(var i=0; i<urls.length; i++){
                    urlList.push(urls[i])
                }

            }
        });
    }
   
    return urlList;    

}

var correlationId = function(){
    return auctionRes.correlationId; 
}

var placements = function(){   
    return auctionRes.placements;
}
    

var medias = function(){
   return auctionRes.media;
}

function recursiveGetProperty(obj, lookup, callback){
    for (property in obj){
        if(property == lookup){
            callback(obj[property]);
        }else if(obj[property] instanceof Object){
            recursiveGetProperty(obj[property], lookup, callback);
        }
    }
}
