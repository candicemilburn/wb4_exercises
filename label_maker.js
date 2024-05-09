"use strict"
/*
name
address
city
state
zip
*/

//create person with properties that describe person
let person = {
    name: "Candice Milburn",
    address: "OneTwo Three Ave",
    city: "Dallas",
    state: "TX",
    zip: "75216",
};
//create funtion that prints/formats and address for the contact to console
function printContact(contact){
    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state} ${contact.zip}
    `);
}

printContact(person);