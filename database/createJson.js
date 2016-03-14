var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('state10thsocial.csv')
});
fs = require('fs');
var jsonFile = new Object();
lineReader.on('line', function (line) {
    var eachLine = line.split("|");
    if(jsonFile[eachLine[0]]==undefined)
    {
      jsonFile[eachLine[0]]=new Object();
    }
    switch(eachLine[0])
    {
      case "1":
        switch(eachLine[1])
        {
          case "MCQ":
            if(jsonFile["1"]["MCQ"]==undefined)
            {
              jsonFile["1"]["MCQ"]=new Array();
            }
            var tempObj = new Object();
            tempObj["question"]=eachLine[2];
            tempObj["options"]=new Array();
            tempObj["options"].push(eachLine[3]);
            tempObj["options"].push(eachLine[4]);
            tempObj["options"].push(eachLine[5]);
            tempObj["options"].push(eachLine[6]);
            jsonFile["1"]["MCQ"].push(tempObj);
            break;
          case "Match":
            if(jsonFile["1"]["Match"]==undefined)
            {
              jsonFile["1"]["Match"]=new Array();
            }
            var tempObj = eachLine[2].split(",");
            jsonFile["1"]["Match"].push(tempObj);
            break;
        }
        break;
      case "2":
        switch(eachLine[1])
        {
          case "Descriptive":
            if(jsonFile["2"]["Descriptive"]==undefined)
            {
              jsonFile["2"]["Descriptive"]=new Array();
            }
            jsonFile["2"]["Descriptive"].push(eachLine[2]);
            break;
        }
        break;
      case "4":
        switch(eachLine[1])
        {
          case "Collection":
            if(jsonFile["4"]["Collection"]==undefined)
            {
              jsonFile["4"]["Collection"]=new Array();
            }
            jsonFile["4"]["Collection"].push(eachLine[2].split(","));

            break;
        }
        break;
    }

});
lineReader.on('close',function(){
  var jsonToWrite = JSON.stringify(jsonFile);
  fs.writeFileSync("u1.json",jsonToWrite);
});
