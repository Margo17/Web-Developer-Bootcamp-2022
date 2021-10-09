import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors'

const input = process.argv[2];
const symb = franc(input);
if (symb === 'und') {
    console.log('Sorry could not figure out the language, try with more sample text.'.red)
} else {
    const language = langs.where('3', symb);
    if (language === undefined) {
        console.log('Error, try again!'.red);
    } else {
        console.log(`This language is ${language.name}`.green);
    }
}
