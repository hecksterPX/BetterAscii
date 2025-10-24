import { font }  from './fonts/font.js';

function genText(text) {
    text = text.toUpperCase();
    const lines = ['', '', '', '', '', ''];
    for (let char of text) {
        if (font[char]) {
            for (let i = 0; i < 6; i++) {
                lines[i] += font[char][i];
            }
        } else {
            for (let i = 0; i < 6; i++) {
                lines[i] += '░░░░░░░░';
            }
        }
    }
    return lines.join('\n');
}

function backround(text) {
    const alines = genText(text).split('\n');
    const width = alines[0].length;
    const topBorder = '=-=-=-=-=-=-'.repeat(Math.ceil(width/9)).substring(0, width);
    const dBorder = '░'.repeat(width);
    let r = topBorder + '\n';
    r += dBorder + '\n';
    for (let line  of alines) {
        r += line + '\n';
    }
    r += dBorder + '\n';
    r += topBorder;
    return r;
}

import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout, prompt: '>> '
});

console.log('='.repeat(60));
console.log('Generate Advanced Ascii Texts');
console.log('Write the text and press enter');
console.log('Write "exit" to exit');
console.log('='.repeat(60));
console.log('');
rl.prompt();
rl.on('line', (input) => {
    const text = input.trim();
    if (text.toLowerCase() === 'exit') {
        console.log('Leaving...'); rl.close(); return;
    }
    if (text.length === '') {
        console.log('Please write something'); rl.prompt(); return;
    }
    console.log('\n'+backround(text) + '\n'); rl.prompt();
});
rl.on('close', () => {
    process.exit(0);
})