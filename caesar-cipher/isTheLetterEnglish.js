const isTheLetterEnglish = (letterCode) => {
    if(isLetterUpperCaseEnglish(letterCode) ||
    isLetterLowerCaseEnglish(letterCode)) return true;
    return false;
}

const isLetterUpperCaseEnglish = (letterCode) => {
    if(letterCode > 64 && letterCode < 91) return true;
    return false;
}

const isLetterLowerCaseEnglish = (letterCode) => {
    if(letterCode > 96 && letterCode < 123) return true;
    return false;
}

module.exports = {
    isTheLetterEnglish:isTheLetterEnglish,
    isLetterUpperCaseEnglish:isLetterUpperCaseEnglish,
    isLetterLowerCaseEnglish:isLetterLowerCaseEnglish
}
