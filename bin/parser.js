import fs from 'fs';
import path from 'path';
import parse from 'parse5';
import defaultTheme from '../configs/svg.json';

export default class Parser {
    /**
     * Loop through all icon files and normalize the data
     * and appends to out output object
     */
    parseIconFiles() {
        this.iconFiles.forEach(iconFile => {
            const name = path.basename(iconFile, '.svg').substring(2);
            const svgMarkup = fs.readFileSync(path.resolve(this.distIconsFolder, iconFile), 'utf8');
            const content = Parser.getContent(svgMarkup);
            const iconObject = {
                name,
                content,
            };

            this.output.icons.push(iconObject);
        });
    }

    /**
     * Reads the markup of the icon file
     * and retuns the inner content
     * @param  {string} markup The inner file markup
     * @return {string} The inner content of the file markup
     */
    static getContent(markup) {
        const fragment = parse.parseFragment(markup);
        const inner = parse.serialize(fragment.childNodes[0]);

        return inner;
    }

    /**
     * Writes the output to a JSON file
     * @return {string | boolean} Returns error or true if successful
     */
    mergeTags(tags) {
        this.output.icons = this.output.icons.map(icon => {
            const tag = tags.find(t => t.name === icon.name);
            icon.aliases = tag.aliases;
            if (tag.hasOwnProperty('fillTag')) {
                icon.fillTag = tag.fillTag || null;
            }

            return icon;
        });
    }

    /**
     * Writes the output to a JSON file
     * @return {string | boolean} Returns error or true if successful
     */
    outputJSON() {
        const output = JSON.stringify(this.output);

        fs.writeFile(path.resolve(__dirname, '../dist/Minicons.json'), output, 'utf8', err => {
            if (err) return err;
            return true;
        });
    }

    /**
     * Reads all icons from the dist folder
     * and sets up configs
     */
    constructor() {
        this.distIconsFolder = path.resolve(__dirname, '../dist/icons');
        this.svgConfig = defaultTheme;
        this.output = {
            config: this.svgConfig,
            icons: [],
        };
        this.iconFiles = fs.readdirSync(this.distIconsFolder)
            .filter(iconFile => path.basename(iconFile).substring(0, 2) === 'i_' && path.extname(iconFile) === '.svg');
    }
}
