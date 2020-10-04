const {isTheLetterEnglish, isLetterUpperCaseEnglish, isLetterLowerCaseEnglish} = require('./isTheLetterEnglish');
const outOfBoundsCheck = require('./outOfBoundCheck.js');

function dataEncoding(chunk, shift, action){
        const stringChunk = chunk.toString('utf8').trim();
        let resultChunk = '';
        for(let i = 0; i < stringChunk.length; i++) {
            const letterCode = stringChunk.charCodeAt(i);
            if(isTheLetterEnglish(letterCode)) {
                const limitChecker = isLetterUpperCaseEnglish(letterCode)?isLetterUpperCaseEnglish:isLetterLowerCaseEnglish;
                const rightShiftedLetterCode = outOfBoundsCheck((+shift + letterCode), limitChecker, action);
                resultChunk += String.fromCharCode(rightShiftedLetterCode);
            }
            else resultChunk += stringChunk[i];
        }
        return resultChunk;
}

module.exports = dataEncoding;
