// Styles were taken from here
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/ghcolors.js
// Then formatted to work for our prism-react-renderer
// We use react-syntax-highlighter styles because its the same styles as what Playground uses

import { type PrismTheme } from 'prism-react-renderer';

const githubLightTheme: PrismTheme = {
    plain: {
        color: '#393A34',
        // backgroundColor: '#f6f8fa', // default background color
        backgroundColor: 'var(--varnish-background-codeblocks-light-color)',
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: '#999988',
                fontStyle: 'italic',
            },
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7,
            },
        },
        {
            types: ['string', 'attr-value'],
            style: {
                color: '#e3116c',
            },
        },
        {
            types: ['punctuation', 'operator'],
            style: {
                color: '#393A34',
            },
        },
        {
            types: [
                'entity',
                'url',
                'symbol',
                'number',
                'boolean',
                'variable',
                'constant',
                'property',
                'regex',
                'inserted',
            ],
            style: {
                color: '#36acaa',
            },
        },
        {
            types: ['atrule', 'keyword', 'attr-name', 'selector'],
            style: {
                color: '#00a4db',
            },
        },
        {
            types: ['function', 'deleted', 'tag'],
            style: {
                color: '#d73a49',
            },
        },
        {
            types: ['function-variable'],
            style: {
                color: '#6f42c1',
            },
        },
        {
            types: ['tag', 'selector', 'keyword'],
            style: {
                color: '#00009f',
            },
        },
        {
            types: ['highlight'],
            style: {
                background: 'hsla(0, 0%, 70%, .5)',
            },
        },
    ],
};

export default githubLightTheme;
