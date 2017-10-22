import fs from 'fs';
import path from 'path';
import parse from 'parse5';
import defaultTheme from '../configs/svg.json';

export default class Parser {
    constructor() {
        this.distIconsFolder = path.resolve(__dirname, '../dist/icons');
        this.svgConfig = defaultTheme;
        this.output = {
            config: this.svgConfig,
            icons: [],
        };
        this.iconFiles = fs.readdirSync(this.distIconsFolder)
            .filter(file => path.basename(file).substring(0, 2) === 'i_' && path.extname(file) === '.svg');
    }

    mapIconFiles() {
        this.iconFiles.forEach(icon => {
            const name = path.basename(icon, '.svg').substring(2);
            const markup = fs.readFileSync(path.resolve(this.distIconsFolder, icon), 'utf8');
            const content = Parser.getContent(markup);
            const iconObject = {
                name,
                content,
            };

            this.output.icons.push(iconObject);
        });
    }

    static getContent(markup) {
        const fragment = parse.parseFragment(markup);
        const inner = parse.serialize(fragment.childNodes[0]);

        return inner;
    }

    outputJSON() {
        const output = JSON.stringify(this.output);

        fs.writeFile(path.resolve(__dirname, '../dist/Minicons.json'), output, 'utf8', err => {
            if (err) return err;

            return true;
        });
    }
}
