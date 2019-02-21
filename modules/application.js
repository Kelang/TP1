import {descriptionProjet1} from './descriptionProjet.js'
import {descriptionProjet2} from './descriptionProjet.js'
import {descriptionProjet3} from './descriptionProjet.js'
import {AnimDesc} from './AnimDesc.js'


let elmDescription = document.getElementById("projet1")

elmDescription.addEventListener("click", description);


let description = new AnimDesc(descriptionProjet1, elmDescription, integrerDescription)

/*
let elmDescription2 = document.getElementById("projet2")
let description2 = new AnimDesc(descriptionProjet2, elmDescription, integrerDescription)


let elmDescription3 = document.getElementById("projet3")
let description3 = new AnimDesc(descriptionProjet3, elmDescription, integrerDescription)

*/























