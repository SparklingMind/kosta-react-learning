import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Admin = () => {
    const [params, setParams] = useSearchParams(); //ex) ~admin?name=value&age=value
    console.log(params);
    return (
        <div>
            <h3>Admin 입니다.{params.get("age")}</h3>
        </div>
    );
};

export default Admin;