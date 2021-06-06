import React from 'react'
import Link from '../../../Link';
import { useArticleProps } from '../interface';

const MSize = () => {
    const props = useArticleProps();
    return (
        <Link href={props.href} type={props.type}>
            <h1>{props.title ?? 'undefined title'}</h1>
            {props.description && (<p>{props.description}</p>)}
        </Link>
    )
};

export default MSize;