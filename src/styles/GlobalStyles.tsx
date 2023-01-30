import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles, theme } from 'twin.macro'

const stylesBase = css`
  /* THEME COLORS */
  .light {
    --bg-primary: var(--brand-yellow);
    --bg-secondary: var(--brand-gray-light);
    --bg-tertiary: var(--brand-black);
    --text-primary: var(--brand-black);
    --text-secondary: var(--brand-gray-dark);
    --text-tertiary: var(--brand-yellow);
    --color-primary: var(--brand-red);
  }
  .dark {
    --bg-primary: var(--brand-black);
    --bg-secondary: var(--brand-gray-dark);
    --bg-tertiary: var(--brand-white);
    --text-primary: var(--brand-white);
    --text-secondary: var(--brand-gray-light);
    --text-tertiary: var(--brand-red);
    --color-primary: var(--brand-blue);
  }

  /* CORE BASE STYLES */
  html {
    background-color: #e9c46a;
    scroll-behavior: smooth !important;
  }
  body {
    ${tw`bg-primary text-primary transition-all duration-200`}
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${theme`textColor`};
    background: ${theme`backgroundColor`};
    transition-property: background-color;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    min-height: 100%;
    font-feature-settings: 'kern';
    margin: 0;
    box-sizing: border-box;
  }
  ul {
    list-style-type: disc;
    li {
      margin: 0 1rem;
      padding: 0.15rem 0.5rem;
    }
    li::marker {
      color: var(--brand-blue);
    }
  }
`

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.brandRed`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={[stylesBase, customStyles]} />
  </>
)

export default GlobalStyles
