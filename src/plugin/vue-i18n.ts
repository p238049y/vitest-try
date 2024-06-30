import { createI18n } from "vue-i18n";

const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    allowComposition: true,
    messages: {
        ja: {
            $vuetify: {
                dataIterator: {
                    rowPerPageText: 'Element per sida',
                    pageText: '{0}-{1} av {2}'
                }
            }
        }
    },
    globalInjection: true
})

export {i18n};