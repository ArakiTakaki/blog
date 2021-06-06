import React from 'react'
import Link from '../../../Link';
import { useArticleProps } from '../interface';
import styles from './MSize.module.css';

const MSize = () => {
    const props = useArticleProps();
    return (
        <Link href={props.href} type={props.type} className={styles['m-size']}>
            <h1>{props.title ?? 'undefined title'}</h1>
            {props.description && (<p>{props.description}</p>)}
        </Link>
    )
};

export default MSize;