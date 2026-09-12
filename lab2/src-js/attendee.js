class Attendee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.registeredEvents = [];
    }

    registerForEvent(eventId) {
        if (!this.registeredEvents.includes(eventId)) {
            this.registeredEvents.push(eventId);
            return true;
        }
        return false;
    }

    cancelRegistration(eventId) {
        const index = this.registeredEvents.indexOf(eventId);
        if (index === -1) return false;

        this.registeredEvents.splice(index, 1);
        return true;
    }

    isRegisteredForEvent(eventId) {
        return this.registeredEvents.includes(eventId);
    }
}

module.exports = {
    Attendee
};