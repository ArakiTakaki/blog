import React from 'react'
import { useArticleProps } from '../interface';
import Link from '../../../Link';

const List = () => {
    const props = useArticleProps();
    return (
        <Link href={props.href} type={props.type}>
            <h1>{props.title ?? 'undefined title'}</h1>
            {props.description && (<p>{props.description}</p>)}
        </Link>
    )
};

export default List;