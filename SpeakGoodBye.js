var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}

(function(window){
	var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }
  
  window.byeSpeaker = byeSpeaker;

})(window);