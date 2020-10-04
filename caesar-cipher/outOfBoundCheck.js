module.exports = (shiftedCode, limitCheck, action) => {
    if(limitCheck(shiftedCode)) return shiftedCode;
    switch(action) {
        case 'encode': while(!limitCheck(shiftedCode)) shiftedCode -= 26;
        break;
        case 'decode': while(!limitCheck(shiftedCode)) shiftedCode += 26;
        break;
        default:break;
    }
    return shiftedCode;
}
