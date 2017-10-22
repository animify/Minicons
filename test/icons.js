import path from 'path';
import { use, expect, assert } from 'chai';
import Parser from '../bin/Parser';
import svgConfig from './../configs/svg.json';

use(require('chai-fs'));

describe('File checks', () => {
    it('Icons directory exists', next => {
        expect('icons').to.be.a.directory();
        next();
    });

    it('Dist icons directory exists', next => {
        expect('dist/icons').to.be.a.directory();
        next();
    });

    it('SVG config file exists', next => {
        assert.jsonFile('configs/svg.json');
        next();
    });

    it('Minicons JSON created', next => {
        assert.jsonFile('dist/Minicons.json');
        next();
    });

    it('Icon has SVG tag', next => {
        const hasSvgTag = new RegExp(/svg/, 'i');
        expect('icons/i_add-circle.svg').to.be.a.file().with.contents.that.match(hasSvgTag);
        next();
    });
});

describe('Valid theme config', () => {
    it('Name property', next => {
        expect(svgConfig).to.have.property('name');
        next();
    });

    it('Attributes property', next => {
        expect(svgConfig).to.have.property('props');
        expect(svgConfig.props).to.not.be.empty;
        next();
    });
});

describe('Build parser check', () => {
    const parser = new Parser();

    it('Contains default properties', next => {
        expect(parser).to.have.property('distIconsFolder');
        expect(parser).to.have.property('svgConfig');
        expect(parser).to.have.property('output');
        expect(parser).to.have.property('iconFiles');
        next();
    });

    it('Correct default property types', next => {
        expect(parser.distIconsFolder).to.be.a('string');
        expect(parser.output).to.be.an('object');
        expect(parser.svgConfig).to.be.an('object');
        expect(parser.iconFiles).to.be.an('array');
        expect(parser.iconFiles[0]).to.satisfy(icon => path.extname(icon) === '.svg');

        next();
    });

    it('Icon files in array', next => {
        expect(new Parser()).to.not.be.empty;
        next();
    });
});
