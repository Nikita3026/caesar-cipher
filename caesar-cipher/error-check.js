module.exports = (shift, action) => {
        if(action !== 'encode' && action !== 'decode') throw new Error('Error! The entered action does not exist. Try to enter encode or decode');
        if(action === 'encode' && shift < 0) throw new Error('Error! Wrong shift value.');
        if(action === 'decode' && shift > 0) throw new Error('Error! Wrong shift value.');
        return false;
}
