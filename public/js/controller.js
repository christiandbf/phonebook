'use strict';

var phonebook = new PhoneBook();
var viewContact = new ViewContact();
var dom = new DOM();

dom.buttonSave.addEventListener('click', function () {
    var values = dom.getValuesContact();

    if (values[0] && values[1]) {
        phonebook.addContact(values[0], values[1]);
        viewContact.createView(phonebook);
    }
});

dom.buttonShow.addEventListener('click', function () {
    if (dom.buttonShow.textContent == 'Show contacts') {
        dom.addViewContacts();
    } else {
        dom.removeViewContacts();
    }
});