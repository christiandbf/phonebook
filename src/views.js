class ViewContact {
    constructor() {        
        this.bodyContactsValues = document.getElementById('table-contacts-values');
    }

    createView(phonebook) {
        this.bodyContactsValues.innerHTML = '';
        
        for (let i in phonebook.contacts) {
            this.bodyContactsValues.innerHTML += `
                <tr>
                    <td>${phonebook.contacts[i].getName()}</td>
                    <td>${phonebook.contacts[i].getNumber()}</td>
                </tr>
            `;
        }        
    }
}

class DOM {
    constructor() {
        this.tableIndex = document.getElementById('table-contacts');
        this.buttonSave = document.getElementById('contact-save');
        this.buttonShow = document.getElementById('contacts-show');
        this.nameContact = document.getElementById('contact-name');
        this.numberContact = document.getElementById('contact-number');
    }

    getValuesContact() {
        return [this.nameContact.value, this.numberContact.value];
    }

    addViewContacts() {
        this.tableIndex.classList = 'show';
        this.buttonShow.textContent = 'Hide contacts';
    }

    removeViewContacts() {
        this.tableIndex.classList = 'hide';
        this.buttonShow.textContent = 'Show contacts';
    }
}