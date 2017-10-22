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
        expect(parser).to.not.be.empty;
        next();
    });
});
