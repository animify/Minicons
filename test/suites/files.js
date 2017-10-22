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

    it('minicons.js created', next => {
        expect('dist/minicons.js').to.be.a.file().and.not.empty;
        next();
    });

    it('Icon has SVG tag', next => {
        const hasSvgTag = new RegExp(/svg/, 'i');
        expect('icons/i_add-circle.svg').to.be.a.file().with.contents.that.match(hasSvgTag);
        next();
    });
});
