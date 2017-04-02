class Contact {
    constructor(_name, _number) {
        this.name = _name;
        this.number = _number;
    }

    getName() {
        return this.name;
    }

    getNumber() {
        return this.number;
    }

    setName(_name) {
        this.name = _name;
    }

    setNumber(_number) {
        this.number = _number;
    }
}

class PhoneBook {
    constructor() {
        this.contacts = [];
    }

    addContact(name, number) {
        let newContact = new Contact(name, number);
        this.contacts.push(newContact);
    }
}