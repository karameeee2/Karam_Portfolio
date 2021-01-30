import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../components/scrollToTop/scrollToTop';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
);

export default Root;