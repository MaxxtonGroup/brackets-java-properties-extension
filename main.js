define(function (require, exports, module) {
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var language = LanguageManager.getLanguage("properties");
    language.setLineCommentSyntax(["#"]);
});