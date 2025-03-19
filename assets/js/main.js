import * as tdr from "./time-dependent_rendering.js";

// Popovers from bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

tdr.cut_off_news();
tdr.insert_upcoming_and_previous_headings();
