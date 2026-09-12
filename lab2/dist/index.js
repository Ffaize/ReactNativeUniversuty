"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("./events");
const pricing_1 = require("./pricing");
const attendee_1 = require("./attendee");
const basics_1 = require("./basics");
const openEvents = (0, events_1.getOpenEvents)(events_1.events);
for (const event of openEvents) {
    console.log((0, basics_1.formatEventTitle)(event.title, event.category));
}
const user = new attendee_1.Attendee(1, 'John Doe');
try {
    user.registerForEvent(openEvents[0].id);
    user.registerForEvent(openEvents[0].id);
}
catch (error) {
    console.error('Error occurred while registering for events:', error);
}
try {
    const registrationSummary = (0, pricing_1.calculateRegistration)(events_1.events, [openEvents[0].id], 5);
    console.log('Registration Summary:', registrationSummary);
}
catch (error) {
    console.error('Error occurred while calculating registration:', error);
}
for (const event of openEvents) {
    (0, basics_1.printEventSummary)(event.title, event.seatsLeft);
}
