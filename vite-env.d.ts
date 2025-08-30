interface ImportMetaEnv {
    readonly VITE_USER_API: string;
    readonly VITE_PRODUCT_API: string;
    readonly VITE_APP_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}