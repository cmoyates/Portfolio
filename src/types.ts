export enum View {
    Home,
    Projects,
    Contact
}

export type ViewData = {
    width: number,
    height: number
}

export type ProjectData = {
    name: string,
    imgDir: string,
    description: string,
    linkToProject?: string,
    linkToSourceCode: string,
    altText?: string
}