import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';

type SFCWithInstall<T> = T & Plugin;

// 遍历所有的组件，然后使用app.use()方法进行注册
export function makeInstaller(componets: Plugin[]) {
    const installer = ( app: App ) => each(componets, (c) => app.use(c));

    return installer as Plugin;
}

// 为组件添加install方法，然后使用app.component()方法进行注册
export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any).name;
        app.component(name, component as Plugin);
    };
    return component as SFCWithInstall<T>;
}