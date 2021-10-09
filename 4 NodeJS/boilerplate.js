const fs = require('fs');
const dir = process.argv[2] || 'Project';

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     if (err) throw err;
// });

try {
    fs.mkdirSync(dir);
    fs.writeFileSync(`${dir}/index.html`);
    fs.writeFileSync(`${dir}/app.js`);
    fs.writeFileSync(`${dir}/styles.css`);
} catch (err) {
    console.log('Something went wrong...');
    console.log(err);
}
