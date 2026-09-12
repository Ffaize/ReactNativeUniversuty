"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendee = void 0;
class Attendee {
    id;
    name;
    registeredEventIds;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.registeredEventIds = [];
    }
    registerForEvent(eventId) {
        if (this.registeredEventIds.includes(eventId)) {
            return false;
        }
        this.registeredEventIds.push(eventId);
        return true;
    }
    cancelRegistration(eventId) {
        const index = this.registeredEventIds.indexOf(eventId);
        if (index === -1) {
            return false;
        }
        this.registeredEventIds.splice(index, 1);
        return true;
    }
    isRegisteredForEvent(eventId) {
        return this.registeredEventIds.includes(eventId);
    }
}
exports.Attendee = Attendee;
