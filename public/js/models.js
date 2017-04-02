"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contact = function () {
    function Contact(_name, _number) {
        _classCallCheck(this, Contact);

        this.name = _name;
        this.number = _number;
    }

    _createClass(Contact, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getNumber",
        value: function getNumber() {
            return this.number;
        }
    }, {
        key: "setName",
        value: function setName(_name) {
            this.name = _name;
        }
    }, {
        key: "setNumber",
        value: function setNumber(_number) {
            this.number = _number;
        }
    }]);

    return Contact;
}();

var PhoneBook = function () {
    function PhoneBook() {
        _classCallCheck(this, PhoneBook);

        this.contacts = [];
    }

    _createClass(PhoneBook, [{
        key: "addContact",
        value: function addContact(name, number) {
            var newContact = new Contact(name, number);
            this.contacts.push(newContact);
        }
    }]);

    return PhoneBook;
}();