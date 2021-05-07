

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


fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9d3d473033114abd9f744fda2fa0f2ce", {
	"method": "GET"
})
.then(response => {
	return response.text();
})
.then(data => {
    var n = JSON.parse(data);
    var num = Math.floor(Math.random() * 10) + 1; 
    document.getElementById("news1").innerHTML += `<h3>Wall Street Journal</h3>`;
    document.getElementById("news1").innerHTML += n.articles[num].title;
    document.getElementById("news1").innerHTML += '<button id="news1Button">Article Link</button><br><br>';
    document.getElementById("news1Button").onclick= function() {
        document.getElementById("news1").innerHTML += n.articles[num].url;
    }
    //n.articles[num].url
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
    var num = Math.floor(Math.random() * 20) + 1; 
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