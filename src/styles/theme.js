export const theme = {
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },
  space: [
    0, //0
    2, //1
    4, //2
    8, //3
    16, //4
    32, //5
    64, //6
  ],
  fonts: {
    main: {
      regular: 'Roboto-Regular', //400
      medium: 'Roboto-Medium', //500
      bold: 'Roboto-Bold', //700
      extraBold: 'Roboto-Black', //800
    },
  },

  fontSizes: [
    '12px', // 0
    '14px', // 1
    '16px', // 2
    '20px', // 3
    '24px', // 4
    '28px', // 5
    '32px', // 6
    '48px', // 7
    '68px', // 8
  ],
  colors: {
    yellow: '#FFC107',
    white: '#ffffff',
    grey: '#888888',
    black: '#111111',
    blue: '#057ef0',
    lightBlue: '#2c93f5',
    green: '#0a6169',
    red: '#F43F5E',
    // gradientBlue: 'linear-gradient(290.46deg, #1d74c2 0%, #9BD0FF 107.89%)',
  },
  boxShadows: {
    main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};
