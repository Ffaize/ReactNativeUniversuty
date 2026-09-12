export class Attendee {
    id: number;
    name: string;
    registeredEventIds: string[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.registeredEventIds = [];
    }

    registerForEvent(eventId: string): boolean {
        if (this.registeredEventIds.includes(eventId)) {
            return false;
        }

        this.registeredEventIds.push(eventId);
        return true;
    }

    cancelRegistration(eventId: string): boolean {
        const index = this.registeredEventIds.indexOf(eventId);
        if (index === -1) {
            return false;
        }

        this.registeredEventIds.splice(index, 1);
        return true;
    }

    isRegisteredForEvent(eventId: string): boolean {
        return this.registeredEventIds.includes(eventId);
    }
}
