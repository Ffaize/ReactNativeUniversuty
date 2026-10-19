export type StackParamList = {
    Login: undefined;
    Welcome: { email: string };
    // додаткове завдання: меню і деталі страви
    Menu: undefined;
    Details: { itemId: string };
};

export type TabParamList = {
    Login: undefined;
    Welcome: { email?: string } | undefined;
};

export type DrawerParamList = {
    Login: undefined;
    Welcome: { email?: string } | undefined;
};
