import { use, expect } from 'chai';

use(require('chai-fs'));

describe('File checks', () => {
    it('Icons directory exists', done => {
        expect('icons').to.be.a.directory();
        done();
    });

    it('Dist icons directory exists', done => {
        expect('dist/icons').to.be.a.directory();
        done();
    });

    it('Has SVG tag', done => {
        const hasSvgTag = new RegExp(/svg/, 'i');
        expect('icons/i_add-circle.svg').to.be.a.file().with.contents.that.match(hasSvgTag);
        done();
    });
});
