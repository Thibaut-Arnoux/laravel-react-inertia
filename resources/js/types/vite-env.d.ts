/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    readonly VITE_GITHUB_REPOSITORY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
