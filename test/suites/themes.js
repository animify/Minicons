describe('Valid theme config', () => {
    it('Name property', next => {
        expect(svgConfig).to.have.property('name');
        next();
    });

    it('Props property', next => {
        expect(svgConfig).to.have.property('props');
        expect(svgConfig.props).to.not.be.empty;
        next();
    });

    it('Valid props', next => {
        expect(svgConfig.props).to.have.all.keys('width', 'height', 'viewbox', 'fill', 'stroke', 'stroke-width', 'stroke-linejoin', 'stroke-linecap');
        expect(svgConfig.props.width).to.be.a('number');
        expect(svgConfig.props.height).to.be.a('number');
        expect(svgConfig.props['stroke-width']).to.be.a('number');
        next();
    });
});
