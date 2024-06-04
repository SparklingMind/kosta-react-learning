import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h3>User입니다.</h3>
            <h3>Params : {params.id}</h3>
        </div>
    );
};

export default User;