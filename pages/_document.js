import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
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

export default MyDocument;