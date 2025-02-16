import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
    --text-color: #333;

    --neutral-900: #12131A;
    --neutral-800: #21222C;
    --neutral-700: #2A2B37;
    --neutral-600: #404254;
    --neutral-200: #E4E4EF;
    --neutral-100: #F2F2F7;
    --neutral-000: #FFFFFF;

    --purple-400: #D3A0FA;
    --purple-500: #C27CF8;

    --yellow-500: #FF9F00;

    --orange-500: #FE8159;
    --orange-800: #DA3701;

    --text-preset-1: normal 700 64px/1 "DM Sans", sans-serif;
    --text-preset-1-mobile: normal 700 40px/1 "DM Sans", sans-serif;
    --text-preset-2: normal 600 24px/1.3 "DM Sans", sans-serif;
    --text-preset-3: normal 400 20px/1.4 "DM Sans", sans-serif;
    --text-preset-4: normal 400 16px/1.3 "DM Sans", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: var(--purple-400); 
}
::-webkit-scrollbar-thumb:hover {
  background: var(--purple-500); 
}

  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    font-family: Arial, sans-serif;
    color: ${(props) => props.theme.color};   
    background: url(${(props) => props.theme.background}) repeat;
    transition: all .3s;
    animation: moveBackground 30s infinite alternate ease-in-out;
  }
  @keyframes moveBackground {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }

  #root{
    width: 990px;
    height: 100%;
    padding: 32px 0 64px 0;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1023px) {
    #root {
      width: 100%;
      padding: 0 32px;
    }
  }
  @media (max-width: 767px) {
    #root {
      width: 100%;
      padding: 0 16px;
    }
  }
`;
