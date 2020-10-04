const fs = require('fs');
const {pipeline} = require('stream');
const through2 = require('through2');
const dataEncoding = require('./dataEncoding');

module.exports = (args) => {
    return pipeline(
        args.input? fs.createReadStream(args.input, 'utf8') : process.stdin,
        through2(function(chunk, _, callback){
            this.push(dataEncoding(chunk, args.shift, args.cliAction))
            callback()
        }),
        args.output ? fs.createWriteStream(args.output, {'flags': 'a'}) : process.stdout,
        (err) => {
            if(err) console.error('Error! Unable to read or write to file. Please, check file paths.');
            else console.log('Record succeeded.');
        }
    )
};
