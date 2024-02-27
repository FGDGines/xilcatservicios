import { ArticleCategory } from "../../pages/Blog/types"

export type TRoles = 'ADMINISTRATOR' | 'LAWYER' | 'CONTABILITY' | 'CLIENT' | 'COMMUNITY' | 'GUEST'

export type TRolesWithTraduction = {
    value: TRoles,
    text: string
}

export type TCategoryList = {
    value: ArticleCategory,
    text: string
}

/* INPUTS */
export type BlogInputs = {
    en_title: string;
    ca_title: string;
    es_title: string;

    en_content: string;
    ca_content: string;
    es_content: string;

    image: FileList;
    category: ArticleCategory;
    contact: string
    email?: string
    name?: string
}