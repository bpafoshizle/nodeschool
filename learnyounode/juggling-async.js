http = require("http");
bl = require("bl");

var responseData = [];
var completedResponses = 0;

for(var i = 2; i < process.argv.length; i++){
    http.get(process.argv[i], handleResponseWrapper(i-2))
}

function handleResponseWrapper(index) {
    return function (res) {
        res
        .on("data", handleGet(index))
        .on("error", handleError)
        .on("end", handleEnd);
    }
}

function handleGet(i){
    return function(data) {
        if(!responseData[i]) {responseData[i] = ''}
        responseData[i] += data;
    }
}

function handleError(err) {
    console.log(err);
}

function handleEnd() {
    completedResponses++;
    if(completedResponses === 3){
        for(var i = 0; i < 3; i++) {
            console.log(responseData[i].toString())
        }
    }
}



// Official results are simpler, and don't involve currying. 
// Both cases involved the complexity around scoping of the index
// from the for-loop, and using functions to control that scope.

/* 
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
*/