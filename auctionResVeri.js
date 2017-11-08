
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var auctionRes;

module.exports = {
httpGet : function (theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl,false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
},
getAuctionRes : function (baseURL, gameID){
    var url = baseURL+'/v4/games/'+gameID+'/requests';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",url,false);
    xmlHttp.send(null);

    auctionRes = JSON.parse(xmlHttp.responseText);
    //return xmlHttp.responseText;
    //var correlationId = correlationId;
    console.log("correlationId: "+correlationId())
    var trackingURLs = getTrackingURLs(); 


    

},
getTrackingURLs

};

var getTrackingURLs = function (){
    //console.log(auctionRes);
    var urls = [];  
    
    var placementsList = placements();
    var content; //content: dynamicMarkup, inlinedUrl, etc.
    
    for(var x in placementsList){
        var placement = placementsList[x];
        console.log("placemtn##:" + placement)
        var trackingURLs;
        recursiveGetProperty(auctionRes.media, placement, function(obj){
            console.log("obj"+obj)
            content = JSON.stringify(obj)
            content = JSON.parse(content)
            //contentType = content.contentType;
            trackingURLs = content.trackingUrls;
            console.log("trackingURLS::" + trackingURLs)
        });

        var impressionURLs = JSON.stringify(trackingURLs)
        impressionURLs = JSON.parse(impressionURLs).impression
        
        for (var i = 0; i < impressionURLs.length; i++){

            urls['impression'+i]=impressionURLs[i];
        }
    }
   
    return urls;    

}

var correlationId = function(){
    return auctionRes.correlationId;
    
}

var placements = function(){
   
    return auctionRes.placements;
    // var placements = auctionRes.placements
    // for (var x in placements){
    //     console.log(placements[x])
    // }
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
