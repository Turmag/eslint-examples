export interface IConfig {
    link: string;
    name: string;
}

export interface IStore {
    configs: IConfig[];
    filterWord: string;
}
