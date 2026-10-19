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

## Лаба 9. Навігація

Встановлені пакети: `@react-navigation/native`, `native-stack`, `bottom-tabs`, `drawer` (7.x), `react-native-screens`, `react-native-gesture-handler`, `@expo/vector-icons`, `react-native-reanimated` + `react-native-worklets`.

```bash
npm install
npx expo install --check
npx tsc --noEmit
npx expo start
```

Варіант навігації вибирається в `App.tsx`:

```tsx
const ActiveNavigator = StackFlow; // або TabsFlow, DrawerFlow
```

- `navigation/types.ts` — параметри маршрутів для трьох варіантів.
- `navigation/StackFlow.tsx` — Login → Welcome (email у параметрах), повернення кнопкою заголовка або «Повернутися до форми». Додатково: Welcome → Меню → Деталі страви (`Details: { itemId }`).
- `navigation/TabsFlow.tsx` — вкладки «Форма» і «Привітання» з іконками Ionicons; без email — «Гість».
- `navigation/DrawerFlow.tsx` — ті самі розділи у бічному меню.
- `theme/useAppColors.ts` — хук палітри за системною темою.
- `components/ScreenFrame.tsx` — вміст екрана + підвал з нижнім safe area.

Скріншоти — `screenshots/lab9/`.
