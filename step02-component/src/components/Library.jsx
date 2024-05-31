import React from 'react';
import Book from './Book';

const Library = () => {
    return (
        <>
            <Book name = "Spring" numPage="300" />
            <Book name = "HTML" numPage="200"/>
            <Book name = "React" numPage="300"/>
        </>
    );
};

export default Library;