import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const Loading = () => {
    return <div style={{ width: '100%', textAlign: 'center' }}>
        <h3>Loading...</h3>
        <CircularProgress style={{ margin: '0 auto' }} />
    </div>;
};