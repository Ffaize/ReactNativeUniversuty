const { events, getOpenEvents } = require('./events.js');
const { calculateRegistration } = require('./pricing.js');
const { Attendee } = require('./attendee.js');
const { formatEventTitle, printEventSummary } = require('./basics.js');

const openEvents = getOpenEvents(events);

for (const event of openEvents) {
    console.log(formatEventTitle(event.title, event.category));
}

const user = new Attendee(1, 'John Doe');


try {
    user.registerForEvent(openEvents[0].id);
    user.registerForEvent(openEvents[1].id);
    user.registerForEvent(openEvents[0].id);
}
catch (error) {
    console.error('Error occurred while registering for events:', error);
}

try {
    const registrationSummary = calculateRegistration(events, [openEvents[0].id, openEvents[1].id], 5);
    console.log('Registration Summary:', registrationSummary);
}
catch (error) {
    console.error('Error occurred while calculating registration:', error);
}


for (const event of openEvents) {
    printEventSummary(event.title, event.seatsLeft);
}
