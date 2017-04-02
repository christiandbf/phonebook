'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewContact = function () {
    function ViewContact() {
        _classCallCheck(this, ViewContact);

        this.bodyContactsValues = document.getElementById('table-contacts-values');
    }

    _createClass(ViewContact, [{
        key: 'createView',
        value: function createView(phonebook) {
            this.bodyContactsValues.innerHTML = '';

            for (var i in phonebook.contacts) {
                this.bodyContactsValues.innerHTML += '\n                <tr>\n                    <td>' + phonebook.contacts[i].getName() + '</td>\n                    <td>' + phonebook.contacts[i].getNumber() + '</td>\n                </tr>\n            ';
            }
        }
    }]);

    return ViewContact;
}();

var DOM = function () {
    function DOM() {
        _classCallCheck(this, DOM);

        this.tableIndex = document.getElementById('table-contacts');
        this.buttonSave = document.getElementById('contact-save');
        this.buttonShow = document.getElementById('contacts-show');
        this.nameContact = document.getElementById('contact-name');
        this.numberContact = document.getElementById('contact-number');
    }

    _createClass(DOM, [{
        key: 'getValuesContact',
        value: function getValuesContact() {
            return [this.nameContact.value, this.numberContact.value];
        }
    }, {
        key: 'addViewContacts',
        value: function addViewContacts() {
            this.tableIndex.classList = 'show';
            this.buttonShow.textContent = 'Hide contacts';
        }
    }, {
        key: 'removeViewContacts',
        value: function removeViewContacts() {
            this.tableIndex.classList = 'hide';
            this.buttonShow.textContent = 'Show contacts';
        }
    }]);

    return DOM;
}();