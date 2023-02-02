// add API key be a varriable
var APIkey = "zk4kTyVkPQ4JiiAjiDejZT8AgjgH2CSR";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey;

//display the search info of the New York Times Article Search API
// function displaySearchInfo(){

//     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey"
// }
//create a Ajax call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
     console.log(response.response.docs);

});