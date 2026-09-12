"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = void 0;
exports.getOpenEvents = getOpenEvents;
exports.getEventById = getEventById;
exports.getEventTitles = getEventTitles;
exports.getEventsByCategory = getEventsByCategory;
exports.events = [
    {
        id: 'ux-lecture',
        title: 'Відкрита лекція: Мобільний UX',
        startsAt: new Date('2026-10-01T16:00:00'),
        seatsLeft: 20,
        capacity: 20,
        category: 'lecture',
        price: 0,
    },
    {
        id: 'ts-workshop',
        title: 'Воркшоп: TypeScript з нуля',
        startsAt: new Date('2026-10-05T10:00:00'),
        seatsLeft: 12,
        capacity: 15,
        category: 'workshop',
        price: 250,
    },
    {
        id: 'rn-meetup',
        title: 'Мітап React Native розробників',
        startsAt: new Date('2026-10-12T18:30:00'),
        seatsLeft: 0,
        capacity: 40,
        category: 'meetup',
        price: 100,
    },
];
function getOpenEvents(events) {
    return events.filter((event) => event.seatsLeft > 0);
}
function getEventById(events, id) {
    return events.find((event) => event.id === id);
}
function getEventTitles(events) {
    return events.map((event) => event.title);
}
function getEventsByCategory(events, category) {
    return events.filter((event) => event.category === category);
}
