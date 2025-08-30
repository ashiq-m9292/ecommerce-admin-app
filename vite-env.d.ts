interface ImportMetaEnv {
    readonly VITE_API: string;
    readonly VITE_APP_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}