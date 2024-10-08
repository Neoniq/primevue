import type { DefineComponent } from '@primevue/core';
import type { Icon } from '@primevue/icons';

declare class SearchPlusIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        SearchPlusIcon: DefineComponent<SearchPlusIcon>;
    }
}

export default SearchPlusIcon;
