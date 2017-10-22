import fs from 'fs';
import path from 'path';
import parse from 'parse5';

class Parser {
    constructor() {
        this.icons = [];
        this.iconFiles = fs.readdirSync(path.resolve(__dirname, '../dist/icons'))
            .filter(file => path.basename(file).substring(0, 2) === 'i_' && path.extname(file) === '.svg');

        this.mapIconFiles();
    }

    mapIconFiles() {
        this.iconFiles.forEach(icon => {
            const name = path.basename(icon, '.svg');
            const markup = fs.readFileSync(path.resolve(__dirname, '../icons', icon), 'utf8');
            const content = Parser.getContent(markup);
            const iconObject = {
                name,
                content,
            };

            this.icons.push(iconObject);
        });
    }

    static getContent(markup) {
        const fragment = parse.parseFragment(markup);
        const inner = parse.serialize(fragment.childNodes[0]);

        return inner;
    }
}

const parser = new Parser();

console.log(parser.icons);
