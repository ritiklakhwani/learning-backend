/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/
import {contactsArr} from "./contactsData.js"

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    contactCard.innerHTML = `
        <h3>${contactObj.name}</h3>
        <p>Email: ${contactObj.email}</p>
        <p>Phone: ${contactObj.phone}</p>
    `

   
    contactDisplay.appendChild(contactCard)
}

patternSearchSubmit.onclick = () => {
    const searchValue = patternSearchInput.value.toLowerCase() 
    contactDisplay.innerHTML = ''

    const matchingContacts = contactsArr.filter((contact) =>{
        return contact.name.toLowerCase().includes(searchValue)
        }
    )

    if (matchingContacts.length === 0) {
        contactDisplay.textContent = 'No contacts found.'
    }    
    
    matchingContacts.forEach(renderContact)

    
}