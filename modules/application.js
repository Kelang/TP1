import {descriptionProjet1} from './descriptionProjet.js'
import {descriptionProjet2} from './descriptionProjet.js'
import {descriptionProjet3} from './descriptionProjet.js'
import {AnimDesc} from './AnimDesc.js'


let elmDescription = document.getElementById("projet1")

elmDescription.addEventListener("click", integrerDescription);

elmDescription.addEventListener("mouseleave", function(evt) {
    $('.descriptionProjet').remove();
    console.log("OUT");
}, false);

//let description = new AnimDesc(descriptionProjet1, elmDescription, integrerDescription)


let elmDescription2 = document.getElementById("projet2")

elmDescription2.addEventListener("click", integrerDescription2);

elmDescription2.addEventListener("mouseleave", function(evt) {
    $('.descriptionProjet').remove();
    console.log("OUT");
}, false);

let elmDescription3 = document.getElementById("projet3")

elmDescription3.addEventListener("click", integrerDescription3);

elmDescription3.addEventListener("mouseleave", function(evt) {
    $('.descriptionProjet').remove();
    console.log("OUT");
}, false);



function integrerDescription() {
    console.log ('integration');
    let description = new AnimDesc(descriptionProjet1, elmDescription, integrerDescription)
}

function integrerDescription2() {
    console.log ('integration');
    let description2 = new AnimDesc(descriptionProjet2, elmDescription2, integrerDescription)
}
function integrerDescription3() {
    console.log ('integration');
    let description3 = new AnimDesc(descriptionProjet3, elmDescription3, integrerDescription)
}




















