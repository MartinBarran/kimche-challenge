import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --primary: #4747ff;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    body {
        margin: 0;
        user-select: none;
        background: #131415;
        color: white;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        padding: 2rem 5rem;
        text-align: center;
        height: 100%;
        min-width: 320px;
        gap:20px;
        
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
    cursor: pointer;
        transition: border-color 0.25s;
        }
    button:hover {
        border-color: #646cff;
        }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
        }

    input {
        border-radius: 5px;
    }

    select {
        border-radius: 5px;
    }

    
`;

export default GlobalStyles;