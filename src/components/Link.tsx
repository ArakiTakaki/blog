import React, { FC } from 'react';
import NextLink from 'next/link';

export interface LinkProps {
    href?: string;
    type?: '' | 'external' | 'button';
    onClick?: () => void;
    className?: string;
}

const Link: FC<LinkProps> = ({
    children,
    href,
    type,
    onClick,
    className,
}) => {
    if (href == null) return <a onClick={onClick} className={className}>{children}</a>
    switch (type) {
        case 'button':
            return <a onClick={onClick} className={className}>{children}</a>;
        case 'external':
            return <a href={href} target="_blank" className={className}>{children}</a>
        case '':
        default:
            return (
                <NextLink href={href}>
                    <a className={className}>{children}</a>
                </NextLink>
            );
    }
};
export default Link;
