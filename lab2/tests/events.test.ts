import { describe, expect, test } from '@jest/globals';
import {
    CampusEvent,
    getEventById,
    getEventTitles,
    getEventsByCategory,
    getOpenEvents,
} from '../src/events';
import { Attendee } from '../src/attendee';

function makeEvents(): CampusEvent[] {
    return [
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
}

describe('getOpenEvents', () => {
    test('повертає лише події з вільними місцями', () => {
        const result = getOpenEvents(makeEvents());

        expect(result.every((event) => event.seatsLeft > 0)).toBe(true);
    });

    test('не повертає подію з нульовою кількістю місць', () => {
        const result = getOpenEvents(makeEvents());

        expect(result.map((event) => event.id)).not.toContain('rn-meetup');
        expect(result).toHaveLength(2);
    });
});

describe('getEventsByCategory', () => {
    test('повертає лише події потрібної категорії', () => {
        const result = getEventsByCategory(makeEvents(), 'workshop');

        expect(result).toHaveLength(1);
        expect(result.every((event) => event.category === 'workshop')).toBe(true);
    });

    test('повертає порожній масив, якщо подій категорії немає', () => {
        const onlyLectures = makeEvents().filter((event) => event.category === 'lecture');

        expect(getEventsByCategory(onlyLectures, 'meetup')).toEqual([]);
    });
});

describe('getEventById', () => {
    test('знаходить подію за відомим ID', () => {
        const result = getEventById(makeEvents(), 'ts-workshop');

        expect(result?.title).toBe('Воркшоп: TypeScript з нуля');
    });

    test('повертає undefined для невідомого ID', () => {
        expect(getEventById(makeEvents(), 'unknown-id')).toBeUndefined();
    });
});

describe('getEventTitles', () => {
    test('повертає масив рядків із назвами', () => {
        const result = getEventTitles(makeEvents());

        expect(result).toEqual([
            'Відкрита лекція: Мобільний UX',
            'Воркшоп: TypeScript з нуля',
            'Мітап React Native розробників',
        ]);
        expect(result.every((title) => typeof title === 'string')).toBe(true);
    });
});

describe('Attendee', () => {
    test('registerForEvent додає новий ID', () => {
        const attendee = new Attendee(1, 'Дмитро');

        expect(attendee.registerForEvent('ux-lecture')).toBe(true);
        expect(attendee.registeredEventIds).toEqual(['ux-lecture']);
    });

    test('registerForEvent не додає той самий ID двічі', () => {
        const attendee = new Attendee(1, 'Дмитро');

        attendee.registerForEvent('ux-lecture');

        expect(attendee.registerForEvent('ux-lecture')).toBe(false);
        expect(attendee.registeredEventIds).toHaveLength(1);
    });

    test('cancelRegistration прибирає ID, а для незареєстрованої події повертає false', () => {
        const attendee = new Attendee(1, 'Дмитро');

        attendee.registerForEvent('ux-lecture');

        expect(attendee.cancelRegistration('ux-lecture')).toBe(true);
        expect(attendee.isRegisteredForEvent('ux-lecture')).toBe(false);
        expect(attendee.cancelRegistration('ux-lecture')).toBe(false);
    });
});
