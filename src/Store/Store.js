import React from 'react'
export const themeConfig = {
    light: {
        headerBg: '#F7B30C',
        fontColor: 'black',
        bodybg: 'white',
        // logo: lightLogo
    },
    dark: {
        headerBg: '#3c3c3c',
        fontColor: 'white',
        bodybg: 'black',
        // logo: darkLogo
    }
};
export const blogState = {
    category: 'all',
    tag:'',
    articles: [],
    article: {}
}

const BlogContext = React.createContext(blogState.);
export default BlogContext;