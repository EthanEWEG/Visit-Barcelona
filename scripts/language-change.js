function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,ca,zh-CN,en,fr,de,it,ja,pt,ru,es',
        layout: google.translate.TranslateElement.InlineLayout
    }, 'google_translate_element');
}