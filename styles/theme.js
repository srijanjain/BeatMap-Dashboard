import React from 'react';
// import { theme as chakraTheme } from '@chakra-ui/core';
import {theme as chakraTheme} from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <g>
        <path fill="#000" stroke="#fff" d="M.5 38.5h99v99H.5zM100.5 38.5h99v99h-99zM200.5 38.5h99v99h-99zM300.5 38.5h99v99h-99zM100.5 138.5h99v99h-99zM.5 238.5h99v99H.5zM100.5 238.5h99v99h-99zM200.5 238.5h99v99h-99zM200.5 338.5h99v99h-99zM300.5 338.5h99v99h-99zM300.5 238.5h99v99h-99zM400.5 238.5h99v99h-99zM200.5 138.5h99v99h-99zM300.5 138.5h99v99h-99zM400.5 138.5h99v99h-99zM500.5 138.5h99v99h-99zM500.5 38.5h99v99h-99zM600.5 38.5h99v99h-99zM700.5 38.5h99v99h-99zM.5 338.5h99v99H.5zM.5 438.5h99v99H.5zM100.5 338.5h99v99h-99zM.5 538.5h99v99H.5zM100.5 538.5h99v99h-99zM300.5 641.5h99v99h-99zM300.5 741.5h99v99h-99zM400.5 741.5h99v99h-99zM400.5 841.5h99v99h-99zM500.5 841.5h99v99h-99zM1027.5 1091.5h99v99h-99zM1077.5 990.5h99v99h-99zM1177.5 888.5h99v99h-99zM1177.5 788.5h99v99h-99z"/>
  <path fill="#000" stroke="#fff" d="M1177.5 691.5h99v99h-99zM1077.5 888.5h99v99h-99zM1077.5 788.5h99v99h-99z"/>
  <path fill="#000" stroke="#fff" d="M1077.5 691.5h99v99h-99zM977.5 888.5h99v99h-99zM977.5 788.5h99v99h-99z"/>
  <path fill="#000" stroke="#fff" d="M977.5 691.5h99v99h-99zM977.5 592.5h99v99h-99zM877.5 592.5h99v99h-99zM777.5 592.5h99v99h-99zM777.5 492.5h99v99h-99z"/>
  <path fill="#000" stroke="#fff" d="M777.5 398.5h99v99h-99zM1377.5 200.5h99v99h-99zM1377.5 100.5h99v99h-99zM1377.5.5h99v99h-99zM1277.5 100.5h99v99h-99zM1277.5.5h99v99h-99zM1177.5 100.5h99v99h-99zM1077.5 100.5h99v99h-99zM977.5 100.5h99v99h-99zM977.5 200.5h99v99h-99zM1077.5 200.5h99v99h-99zM1277.5 200.5h99v99h-99zM1277.5 300.5h99v99h-99zM1177.5 200.5h99v99h-99zM1477.5 100.5h99v99h-99zM1477.5.5h99v99h-99zM1577.5 100.5h99v99h-99zM1577.5.5h99v99h-99zM1677.5 100.5h99v99h-99zM1677.5.5h99v99h-99zM1477.5 200.5h99v99h-99zM1577.5 200.5h99v99h-99zM1677.5 200.5h99v99h-99zM1777.5 200.5h99v99h-99zM877.5 492.5h99v99h-99z"/>
  <path fill="#000" stroke="#fff" d="M877.5 398.5h99v99h-99zM977.5 492.5h99v99h-99v-99z"/>
  <path d="M977.5 398.5h99v99h-99v-99zM1077.5 492.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1077.5 398.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1077.5 300.5h99v99h-99v-99zM1177.5 300.5h99v99h-99v-99zM1177.5 492.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1177.5 398.5h99v99h-99v-99zM1277.5 492.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1277.5 398.5h99v99h-99v-99zM1377.5 300.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1377.5 398.5h99v99h-99v-99zM1477.5 398.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1477.5 300.5h99v99h-99v-99zM1477.5 492.5h99v99h-99v-99zM1527.5 594.5h99v99h-99v-99zM1577.5 398.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1577.5 300.5h99v99h-99v-99zM1677.5 398.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1677.5 300.5h99v99h-99v-99zM1777.5 300.5h99v99h-99v-99zM1677.5 492.5h99v99h-99v-99zM1677.5 594.5h99v99h-99v-99zM1827.5 741.5h99v99h-99v-99zM2054.5 820.5h99v99h-99v-99zM1927.5 1167.5h99v99h-99v-99zM2027.5 1067.5h99v99h-99v-99zM1927.5 1067.5h99v99h-99v-99zM1827.5 1067.5h99v99h-99v-99zM1827.5 1167.5h99v99h-99v-99zM1927.5 967.5h99v99h-99v-99zM1827.5 967.5h99v99h-99v-99zM2027.5 967.5h99v99h-99v-99z" fill="#000" stroke="#fff"/>
  <path d="M1777.5 398.5h99v99h-99v-99zM1577.5 492.5h99v99h-99v-99zM1077.5 592.5h99v99h-99zM1177.5 592.5h99v99h-99zM977.5 990.5h99v99h-99zM500.5 943.5h99v99h-99zM400.5 943.5h99v99h-99z" fill="#000" stroke="#fff"/>
  <path fill="#000" stroke="#fff" d="M400.5 1041.5h99v99h-99zM400.5 1141.5h99v99h-99zM400.5 1241.5h99v99h-99zM200.5 641.5h99v99h-99zM200.5 741.5h99v99h-99zM200.5 841.5h99v99h-99zM300.5 841.5h99v99h-99zM300.5 943.5h99v99h-99z"/>
  <path fill="#000" stroke="#fff" d="M300.5 1041.5h99v99h-99zM300.5 1141.5h99v99h-99z"/> </g>
      ),
    },
    github: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
      )
    },
    google: {
      path: (
        <g>
          <path
            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
            fill="#4285f4"
          />
          <path
            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
            fill="#34a853"
          />
          <path
            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
            fill="#fbbc04"
          />
          <path
            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
            fill="#ea4335"
          />
        </g>
      ),
      viewBox: '0 0 533.5 544.3'
    }
  }
};

export default theme;