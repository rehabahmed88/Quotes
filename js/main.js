var quote = document.getElementById("quote");
var auther = document.getElementById("auther");


var quotes = [
  {
    quote : `“A room without books is like a body without a soul.”`,
    auther : `― Marcus Tullius Cicero`
  },
  {
    quote : `“If you tell the truth, you don't have to remember anything.” `,
    auther : `― Mark Twain `
  },
  {
    quote : `“Without music, life would be a mistake.” `,
    auther : `― Friedrich Nietzsche`
  },
  {
    quote : ` “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    auther : `― Albert Einstein `
  },
  {
    quote : `“In three words I can sum up everything I've learned about life: it goes on.”`,
    auther : `― Robert Frost`
  },
  {
    quote : `“So many books, so little time.”`,
    auther : `― Frank Zappa`
  },
  {
    quote : `  “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”    `,
    auther : `― Bernard M. Baruch    `
  },
  {
    quote : `  “Be the change that you wish to see in the world.”   `,
    auther : `― Mahatma Gandhi `
  }


];
var arVideos = document.getElementsByTagName('video');

for (var i = arVideos.length - 1; i >= 0; i--) {
	var elmVideo = arVideos[i];
	elmVideo.autoplay = false;
}
   function newQuote (){

      random=Math.floor(Math.random() * quotes.length );
        console.log(random); 
     document.getElementById("quote").innerHTML = quotes[random].quote;
     document.getElementById("auther").innerHTML = quotes[random].auther;
     }