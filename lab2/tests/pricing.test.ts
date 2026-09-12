import { describe, expect, test } from '@jest/globals';
import { CampusEvent } from '../src/events';
import { calculateRegistration } from '../src/pricing';

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

describe('calculateRegistration', () => {
    test('правильно рахує суму без знижки', () => {
        const result = calculateRegistration(makeEvents(), ['ts-workshop'], 1);

        expect(result).toEqual({ subTotal: 250, discount: 0, total: 250 });
    });

    test('сумує кілька обраних подій', () => {
        const result = calculateRegistration(makeEvents(), ['ts-workshop', 'ux-lecture'], 2);

        expect(result.subTotal).toBe(500);
        expect(result.total).toBe(500);
    });

    test('застосовує 10% знижку для групи з 10 людей', () => {
        const result = calculateRegistration(makeEvents(), ['ts-workshop'], 10);

        expect(result.subTotal).toBe(2500);
        expect(result.discount).toBe(0.1);
        expect(result.total).toBe(2250);
    });

    test('кидає помилку для невідомої події', () => {
        expect(() => calculateRegistration(makeEvents(), ['unknown-id'], 1)).toThrow(
            'Подія з id unknown-id не знайдена',
        );
    });

    test('кидає помилку для заповненої події', () => {
        expect(() => calculateRegistration(makeEvents(), ['rn-meetup'], 1)).toThrow(
            'Недостатньо місць на подію з id rn-meetup',
        );
    });

    test('кидає помилку для недопустимого groupSize', () => {
        const events = makeEvents();
        const message = 'Кількість учасників має бути цілим числом від 1 до 30';

        expect(() => calculateRegistration(events, ['ts-workshop'], 0)).toThrow(message);
        expect(() => calculateRegistration(events, ['ts-workshop'], 31)).toThrow(message);
        expect(() => calculateRegistration(events, ['ts-workshop'], 2.5)).toThrow(message);
    });
});
