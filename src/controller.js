var phonebook = new PhoneBook();
var viewContact = new ViewContact();
var dom = new DOM();

dom.buttonSave.addEventListener('click', () => {
    let values = dom.getValuesContact();

    if (values[0] && values[1]) {
        phonebook.addContact(values[0], values[1]);
        viewContact.createView(phonebook);
    }
});

dom.buttonShow.addEventListener('click', () => {
    if (dom.buttonShow.textContent == 'Show contacts') {
        dom.addViewContacts();        
    } else {
        dom.removeViewContacts();       
    }
});