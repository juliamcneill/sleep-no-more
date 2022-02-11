import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { StylesProvider } from '@material-ui/core';

const App: React.FC = ({}) => {
    return (
        <StylesProvider injectFirst>
            <div>Sleep No More</div>
        </StylesProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
