import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
        return (
        <Html lang="en">
                <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/logo.png"></link>
                </Head>
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: themeInitializerScript,
                        }}
                    ></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
}

// This function needs to be a String
const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
    // Check initial color preference
    function getInitialColorMode() {
        const persistedPreferenceMode = window.localStorage.getItem('theme');
        const hasPersistedPreference = typeof persistedPreferenceMode === 'string';

        if (hasPersistedPreference) {
            return persistedPreferenceMode;
        }

        // Check the current preference
        const preference = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof preference.matches === 'boolean';

        if (hasMediaQueryPreference) {
            return preference.matches ? 'dark' : 'light';
        }

        return 'light';
    }

    const currentColorMode = getInitialColorMode();
    const element = document.documentElement;
    element.style.setProperty('--initial-color-mode', currentColorMode);

    // If darkmode apply darkmode
    if (currentColorMode === 'dark')
        document.documentElement.setAttribute('data-theme', 'dark');
}