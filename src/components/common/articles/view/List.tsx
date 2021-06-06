import React from 'react'
import { useArticleProps } from '../interface';
import Link from '../../../Link';
import styles from './List.module.css';

const List = () => {
    const props = useArticleProps();
    return (
        <Link href={props.href} type={props.type} className={styles['list-wrap']}>
            <h1>{props.title ?? 'undefined title'}</h1>
            {props.description && (<p>{props.description}</p>)}
        </Link>
    )
};

export default List;