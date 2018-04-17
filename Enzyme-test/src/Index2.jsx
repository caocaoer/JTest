import React from 'react';
import Index2_child from './Index2_child';

const Index = (props) => {
    return (
        <div>
            <button>
                {props.text}
            </button>
            <Index2_child text={props.text}/>
        </div>
    );
}

export default Index;