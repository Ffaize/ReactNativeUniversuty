import { describe, expect, test } from '@jest/globals';
import { CampusEvent } from '../src/events';
import { Attendee } from '../src/attendee';
import { registerForEvent } from '../src/registration';

function makeEvent(overrides: Partial<CampusEvent> = {}): CampusEvent {
    return {
        id: 'ts-workshop',
        title: 'Воркшоп: TypeScript з нуля',
        startsAt: new Date('2026-10-05T10:00:00'),
        seatsLeft: 12,
        capacity: 15,
        category: 'workshop',
        price: 250,
        ...overrides,
    };
}

describe('registerForEvent', () => {
    test('успішна реєстрація зменшує кількість місць', () => {
        const attendee = new Attendee(1, 'Дмитро');
        const event = makeEvent();

        const updated = registerForEvent(attendee, event);

        expect(updated.seatsLeft).toBe(11);
        expect(attendee.isRegisteredForEvent('ts-workshop')).toBe(true);
    });

    test('реєстрація на заповнену подію кидає помилку', () => {
        const attendee = new Attendee(1, 'Дмитро');
        const event = makeEvent({ seatsLeft: 0 });

        expect(() => registerForEvent(attendee, event)).toThrow('немає вільних місць');
        expect(attendee.registeredEventIds).toEqual([]);
    });

    test('повторна реєстрація кидає помилку і не змінює кількість місць', () => {
        const attendee = new Attendee(1, 'Дмитро');
        const event = makeEvent();

        registerForEvent(attendee, event);

        expect(() => registerForEvent(attendee, event)).toThrow('вже зареєстрований');
        expect(event.seatsLeft).toBe(11);
    });
});
