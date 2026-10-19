# Little Lemon (лаби 6–9)

Expo-застосунок на TypeScript, який продовжується з лаби в лабу.

## Запуск

```bash
npm install
npx expo start
```

Перевірка типів:

```bash
npx tsc --noEmit
```

## Лаба 7. Списки та введення тексту

Екран між шапкою і підвалом вибирається в `App.tsx` через `ActiveScreen`:

- `MenuFlatScreen` — меню у `FlatList` + пошук за назвою;
- `MenuGroupedScreen` — те саме меню у `SectionList` за категоріями;
- `WelcomeScreen` — привітання з полем імені;
- `LoginScreen` — навчальна форма входу з локальною перевіркою.

Типи — `types/menu.ts`, дані — `data/menu.ts`, рядок меню — `components/MenuItemRow.tsx`.
Скріншоти — `screenshots/lab7/`.
