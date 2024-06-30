/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GOOGLE_MAP_API_KEY: string;
    readonly VITE_GOOGLE_MAP_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
