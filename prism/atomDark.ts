// Styles were taken from here
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/styles/prism/atom-dark.js
// Then formatted to work for our prism-react-renderer
// We use react-syntax-highlighter styles because its the same styles as what Playground uses

import { type PrismTheme } from 'prism-react-renderer';

const atomDarkTheme: PrismTheme = {
    plain: {
        color: '#c5c8c6', // Default text color
        // backgroundColor: "#1d1f21", // default background color
        backgroundColor: 'var(--varnish-background-codeblocks-dark-color)', // override background color with varnish bg color
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: '#7C7C7C', // Comment color
            },
        },
        {
            types: ['punctuation'],
            style: {
                color: '#c5c8c6', // Punctuation color
            },
        },
        {
            types: ['property', 'keyword', 'tag'],
            style: {
                color: '#96CBFE', // Property, keyword, and tag color
            },
        },
        {
            types: ['class-name'],
            style: {
                color: '#FFFFB6', // Class name color
                textDecorationLine: 'underline',
            },
        },
        {
            types: ['boolean', 'constant'],
            style: {
                color: '#99CC99', // Boolean and constant color
            },
        },
        {
            types: ['symbol', 'deleted'],
            style: {
                color: '#f92672', // Symbol and deleted text color
            },
        },
        {
            types: ['number'],
            style: {
                color: '#FF73FD', // Number color
            },
        },
        {
            types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'],
            style: {
                color: '#A8FF60', // Selector, attribute name, and string colors
            },
        },
        {
            types: ['variable'],
            style: {
                color: '#C6C5FE', // Variable color
            },
        },
        {
            types: ['operator'],
            style: {
                color: '#EDEDED', // Operator color
            },
        },
        {
            types: ['entity'],
            style: {
                color: '#FFFFB6', // Entity color
                cursor: 'help',
            },
        },
        {
            types: ['url'],
            style: {
                color: '#96CBFE', // URL color
            },
        },
        {
            types: ['atrule', 'attr-value'],
            style: {
                color: '#F9EE98', // At-rule and attribute value color
            },
        },
        {
            types: ['function'],
            style: {
                color: '#DAD085', // Function color
            },
        },
        {
            types: ['regex'],
            style: {
                color: '#E9C062', // Regex color
            },
        },
        {
            types: ['important'],
            style: {
                color: '#fd971f', // Important color
                fontWeight: 'bold',
            },
        },
        {
            types: ['bold'],
            style: {
                fontWeight: 'bold', // Bold text
            },
        },
        {
            types: ['italic'],
            style: {
                fontStyle: 'italic', // Italic text
            },
        },
    ],
};

export default atomDarkTheme;
