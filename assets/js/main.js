import * as tdr from "./time-dependent_rendering.js";
import { add_expandable_functionality } from './card_functionalities.js';


// Popovers from bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

 
function copyLinkToClipboard(linkElement) {
    // Copy the href attribute of the link element
    navigator.clipboard.writeText(linkElement.href)
        .then(() => {
            // Alert the copied link
            alert("Copied the link: " + linkElement.href);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

document.querySelectorAll('.copyable').forEach(linkElement => {
    linkElement.addEventListener('click', (event) => {
        event.preventDefault();
        copyLinkToClipboard(linkElement);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  add_expandable_functionality();
});

tdr.cut_off_news();
tdr.insert_upcoming_and_previous_headings();
