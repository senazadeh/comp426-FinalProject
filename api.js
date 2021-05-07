

fetch("https://opentdb.com/api.php?amount=1", {
	"method": "GET"
})
.then(response => {
	return response.text();
})
.then(data => {
    var q = JSON.parse(data);
    document.getElementById("trivia").innerHTML += q.results[0].question;
    document.getElementById("trivia").innerHTML += '<button id="triviaButton">Answer</button><br><br>';
    document.getElementById("triviaButton").onclick= function() {
        document.getElementById("trivia").innerHTML += q.results[0].correct_answer + '.';
    }
})
.catch(err => {
	console.error(err);
});


fetch("https://official-joke-api.appspot.com/random_joke", {
	"method": "GET"
})
.then(response => {
	return response.text();
})
.then(data => {
    var joke = JSON.parse(data);
    document.getElementById("joke").innerHTML += joke.setup;
    document.getElementById("joke").innerHTML += '<button id="jokeButton">Answer</button><br><br>';
    document.getElementById("jokeButton").onclick= function() {
        document.getElementById("joke").innerHTML += joke.punchline;
    }
})
.catch(err => {
	console.error(err);
});


fetch("https://api.coincap.io/v2/assets/bitcoin", {
	"method": "GET"
})
.then(response => {
	return response.text();
})
.then(data => {
    var n = JSON.parse(data);
    var num = Math.floor(Math.random() * 8) + 1; 
    document.getElementById("news1").innerHTML += `<h3>Current Bitcoin Price</h3>`;
    document.getElementById("news1").innerHTML += "Price in USD: $" + Math.round(n.data.priceUsd * 100) / 100 + `<br>`;
    document.getElementById("news1").innerHTML += "Current Supply: " + Math.round(n.data.supply * 100) / 100 + `<br>`;
    document.getElementById("news1").innerHTML += "Percent change in 24 hours: " + Math.round(n.data.changePercent24Hr * 100) / 100;
    //document.getElementById("news1").innerHTML += '<button id="news1Button">Article Link</button><br><br>';
    //document.getElementById("news1Button").onclick= function() {
    //    document.getElementById("news1").innerHTML += n.articles[num].url;
    //}
    console.log(data)
})
.catch(err => {
	console.error(err);
});




fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=9jexuypxBAviivyzhIPopADq5S2ceYoE", {
	"method": "GET"
})
.then(response => {
	return response.text();
})
.then(data => {
    var n = JSON.parse(data);
    var num = Math.floor(Math.random() * 10) + 1; 
    document.getElementById("news2").innerHTML += `<h3>New York Times</h3>`;
    document.getElementById("news2").innerHTML += n.results[num].title;
    document.getElementById("news2").innerHTML += '<button id="news2Button">Article Link</button><br><br>';
    document.getElementById("news2Button").onclick= function() {
        document.getElementById("news2").innerHTML += n.results[num].url;
    }
    //console.log(n.results[num].url);
})
.catch(err => {
	console.error(err);
});
