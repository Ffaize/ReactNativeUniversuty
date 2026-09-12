export type EventCategory = 'lecture' | 'workshop' | 'meetup';

export interface CampusEvent {
    id: string;
    title: string;
    startsAt: Date;
    seatsLeft: number;
    capacity: number;
    category: EventCategory;
    price: number;
}

export const events: CampusEvent[] = [
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

export function getOpenEvents(events: CampusEvent[]): CampusEvent[] {
    return events.filter((event) => event.seatsLeft > 0);
}

export function getEventById(events: CampusEvent[], id: string): CampusEvent | undefined {
    return events.find((event) => event.id === id);
}

export function getEventTitles(events: CampusEvent[]): string[] {
    return events.map((event) => event.title);
}

export function getEventsByCategory(events: CampusEvent[], category: EventCategory): CampusEvent[] {
    return events.filter((event) => event.category === category);
}
