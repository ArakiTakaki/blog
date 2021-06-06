import { createContext, useContext } from "react";
import { LinkProps } from '../../Link';
export type ArticleContextProps = {
    title?: string;
    description?: string;
} & LinkProps;

export const ArticleContext = createContext<ArticleContextProps>({
    title: '',
});

export const useArticleProps = () => {
    return useContext(ArticleContext);
};
