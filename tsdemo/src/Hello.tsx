import React, {useState} from 'react';

interface HelloProps {
    name: string;
    age: number;
}

function Hello(props: HelloProps) {
    const [msg, setMsg] = React.useState("");

    return (
        <div>Hello {props.name} {props.age}</div>
    );
}

export default Hello;