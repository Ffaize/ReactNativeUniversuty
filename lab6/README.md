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

## Лаба 8. Pressable, зображення і хуки

- `App.tsx` зберігає `demoEmail` (`string | null`): `null` — форма, рядок — привітання.
- `LoginScreen` — кнопка `Pressable` «Увійти (демо)», перевірка email і пароля, повідомлення про помилку; пароль очищається і не передається далі.
- `WelcomeScreen` — локальний логотип `assets/images/logo.png` (`resizeMode="contain"`), email з форми, кнопка «Повернутися до форми».
- `theme/palette.ts` — світла і темна палітри; `App` вибирає їх через `useColorScheme()`, у `app.json` — `"userInterfaceStyle": "automatic"`, встановлено `expo-system-ui`.
- Додатково: `useWindowDimensions` (від 600 px логотип і текст стають у рядок) та `components/NetworkLogo.tsx` — мережеве зображення зі станами `loading / ready / error`.

Скріншоти (світла й темна тема, помилки форми) — `screenshots/lab8/`.
