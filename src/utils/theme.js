const Theme = {
  white: {
    mainColor: '#1B1B1B',
    mainBgColor: '#FFFFFF',
    primary50: '#F9E450',
    primary70: '#FFBB38',
    accent30: '#C1BFFA',
    accent60: '#5AC5EC',
  },
  black: {
    mainColor: '#FFFFFF',
    mainBgColor: '#1B1B1B',
    primary50: '#8075FF',
    primary70: '#8A1C7C',
    accent30: '#C1BFFA',
    accent60: '#06D6A0',
  },
  changeToTheme: (theme) => {
    const root = document.documentElement;

    root.style.setProperty('--main-color', theme.mainColor);
    root.style.setProperty('--main-bg-color', theme.mainBgColor);
    root.style.setProperty('--primary-50', theme.primary50);
    root.style.setProperty('--primary-70', theme.primary70);
    root.style.setProperty('--accent-30', theme.accent30);
    root.style.setProperty('--accent-60', theme.accent60);
  },
};

export default Theme;
