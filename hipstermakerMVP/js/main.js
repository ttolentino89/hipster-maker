//APIs
const personAPI = 'https://uinames.com/api/?ext';
const musicAPI = 'https://binaryjazz.us/wp-json/genrenator/v1/story/1/';
const genreAPI = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/';


//DOM queries
const button = document.querySelector('button');
// const genderInput = document.querySelector('gender');
const result = document.querySelector(".show-content");
// const genre = document.getElementById("show-genre");
const make = document.getElementById("make-new");
// const speechBubble = document.getElementById("story");


//axios calls
const getMillenial = async () => {
    let response = await axios.get(personAPI)
    .then(response => {
            let photo = response.data.photo;
            let first = response.data.name;
            let last = response.data.surname;
            let age = response.data.age;
            let country = response.data.region;
            result.innerHTML = `<div class="fade-in" id="newPerson">
                            <img src="${photo}"> <br />
                            <h2>${first} ${last}</h2>
                            <h4>Age ${age} from ${country}</h4><br />
                            <span id="story"><i class="em em-speech_balloon" 
                            aria-role="presentation" 
                            aria-label="SPEECH BALLOON"></i></span> 
                            </div>`;
			        // console.log(first, last, age, country)
             }).then (() => {
                  let speechBubble = document.getElementById("story");
                  let storyModal = document.getElementById("myModal2");
                  let story = document.getElementById("showStory");
                  speechBubble.addEventListener('click', async () => {
                  let response = await axios.get(musicAPI)
                  .then(response => {
                      console.log(response.data);
                      // story.innerText = response.data;
                      story.innerHTML = `<br />"${response.data}" <br><br />`;
                      storyModal.style.display = "block";
                      // speechBubble.innerHTML(`<p>${response.data}</p>`);
                  });
                });
            })
        };


//event listeners
button.addEventListener('click', getMillenial);
make.addEventListener('click', getMillenial);

genre.addEventListener('click', async () => {
  let response = await axios.get(genreAPI)
  .then(response => {
          genre.textContent = response.data;
   });
});


//div functions
function hideInstructions() {
  let x = document.getElementById("intro");
  if (x.style.display === "none") {
    x.style.display = "block";
    result.style.display = "none";
  } else {
    x.style.display = "none";
    result.style.display = "block";
  }
}


//modal functions
let modal = document.getElementById("myModal");
let btn = document.getElementById("about");
let span = document.getElementsByClassName("close")[0];

//second modal
let storyModal = document.getElementById("myModal2");
let span2 = document.getElementsByClassName("close")[1];

//open modal
btn.onclick = function() {
  modal.style.display = "block";
}

//close modal on x click
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  storyModal.style.display = "none";
}

//close modal on click anywhere outside modal window
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == storyModal) {
    storyModal.style.display = "none";
  }
}


// /* Background/Text Color Toggle */
// let mode = document.querySelector("color-mode");
// let darkMode = false;

// mode.addEventListener("click", function() {
// 	if(darkMode = true) {
// 		document.body.style.background = "white";
// 		document.body.style.color = "black";
// 		//reset boolean to false
// 		darkMode = false;
// 	} else {
// 		document.body.style.background = "black";
// 		document.body.style.color = "white";
// 		darkMode = true;
// 	}
// }
