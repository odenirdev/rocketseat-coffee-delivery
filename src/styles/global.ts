import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --base-white: #FFFFFF;
    --base-background: #FAFAFA;
    --base-card: #F3F2F2;
    --base-input: #EDEDED;
    --base-button:#E6E5E5;
    --base-hover: #D7D5D5;
    --base-label: #8D8686;
    --base-text: #574F4D;
    --base-subtitle: #403937;
    --base-title: #272221;
    
    --purple: #8047F8;
    --purple-dark: #4B2995;
    --purple-light: #EBE5F9;
    --yellow: #DBAC2C;
    --yellow-dark: #C47F17;
    --yellow-light: #F1E9C9;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Baloo 2', cursive;
    background-color: var(--base-background);
    color: var(--base-text);
}

h1, .title-xl {
    font-size: 3rem; // 48px
    font-weight: 800;
    color: var(--base-title);
    line-height: 130%;
}

h2, .title-l {
    font-size: 2rem; // 32px
    font-weight: 800;
    color: var(--base-title);
}

h3, .title-m {
    font-size: 1.5rem; // 24px
    font-weight: 800;
}

h4, .title-s {
    font-size: 1.25rem; // 20px
    font-weight: 800;
    color: var(--base-title);
}

h5, .title-xs {
    font-size: 1.125rem; // 18px
    font-weight: 800;
    color: var(--base-title);
}

.text-l {
    font-size: 1.25rem;  // 20px

    &.bold {
        font-weight: 700;
    }
}

.text-m {
    font-size: 1rem; // 16px

    &.bold {
        font-weight: 700;
    }
}

.text-s {
    font-size: 0.875rem; // 14px

    &.bold {
        font-weight: 700;
    }
}

.w-100 {
    width: 100%;
}
`;
