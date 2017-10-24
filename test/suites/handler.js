describe('Minicons handler', () => {
    const handler = new MiniconsHandler();

    it('Contains default properties', next => {
        expect(handler).to.have.property('firstRun');
        expect(handler).to.have.property('canObserve');
        expect(handler).to.have.property('config');
        expect(handler).to.have.property('icons');
        expect(handler).to.have.property('defaultProps');
        next();
    });

    it('Correct default property types', next => {
        expect(handler.firstRun).to.be.a('boolean');
        expect(handler.canObserve).to.be.a('boolean');
        expect(handler.config).to.be.an('object');
        expect(handler.defaultProps).to.be.an('object');
        expect(handler.icons).to.be.an('array');
        next();
    });

    it('Find "add" icon by name', next => {
        const findIcon = handler.find('add');

        expect(findIcon).to.be.an('object');
        expect(findIcon).to.have.own.property('name');
        expect(findIcon).to.have.own.property('content');
        expect(findIcon).to.have.own.property('aliases');
        expect(findIcon.aliases).to.be.an('array').that.is.not.empty;
        next();
    });

    it('Find "add" icon by alias', next => {
        const findIcon = handler.find('plus');

        expect(findIcon).to.be.an('object');
        expect(findIcon.name).to.equal('add');
        next();
    });
});
