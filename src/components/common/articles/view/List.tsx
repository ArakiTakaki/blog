import React from 'react'
import { useArticleProps } from '../article';

const List = () => {
    const props = useArticleProps();
    return (
        <div>
            <h1>{props.title ?? 'undefined title'}</h1>
            { props.description && (<p>{props.description}</p>) }
        </div>
    )
};

export default List;