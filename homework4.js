let submit = document.getElementById("submit");
submit.addEventListener('click', function() {
	let animal = document.querySelector('input[name="image"]:checked')?.value;

if(animal === "panda") {
	document.getElementById("animalimg").innerHTML = "<img src='images/panda.jpeg'>";
	document.getElementById("animaltxt").innerHTML = "You've decided to see a " + animal ;
}

else if(animal === "frog") {
	document.getElementById("animalimg").innerHTML = "<img src='images/frog.jpeg'>";
	document.getElementById("animaltxt").innerHTML = "You've decided to see a " + animal ;
}

else if(animal === "parrot") {
	document.getElementById("animalimg").innerHTML = "<img src='images/parrot.jpeg'>";
	document.getElementById("animaltxt").innerHTML = "You've decided to see a " + animal ;
}

else if(animal === "tiger") {
	document.getElementById("animalimg").innerHTML = "<img src='images/tiger.jpeg'>";
	document.getElementById("animaltxt").innerHTML = "You've decided to see a " + animal ;
}

else if(animal === "penguin") {
	document.getElementById("animalimg").innerHTML = "<img src='images/penguin.jpeg'>";
	document.getElementById("animaltxt").innerHTML = "You've decided to see a " + animal ;
}

else if(animal === "elephant") {
	document.getElementById("animalimg").innerHTML = "<img src='images/elephant.jpeg'>";
	document.getElementById("animaltxt").innerHTML = "You've decided to see an " + animal ;
}

 else {
      document.getElementById("animaltxt").innerHTML = "Invalid response, please select an animal.";
  }
});