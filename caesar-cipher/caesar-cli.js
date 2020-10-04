const {program} = require('commander');
const createPipeline = require('./create-pipeline');
const paramsErrorCheck = require('./error-check');

program
.requiredOption('-s, --shift <shift>', 'Cipher shift value')
.option('-i, --input <filePath>', 'File path for input value')
.option('-o, --output <filePath>', 'File path for output value')
.requiredOption('-a, --cli-action <encode/decode>', 'Encode or decode cipher')
.parse(process.argv);

try{
    paramsErrorCheck(program.opts().shift, program.opts().cliAction)
    createPipeline(program.opts());
}catch(error) {
    console.error(error.message);
}
