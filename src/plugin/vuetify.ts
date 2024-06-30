import { useI18n } from "vue-i18n";
import { createVuetify, VuetifyOptions } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { i18n } from "./vue-i18n";

const option: VuetifyOptions = {
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n})
    },
}

export const vuetify = createVuetify(option);