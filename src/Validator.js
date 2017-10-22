export default class Validator {
    /**
     * Validate user options when passed
     * through to setOptions
     * @param  {Object} options Observe and config options object
     * @return {Object | boolean} Return error object or true if valid
     */
    static validateOptions(options, next) {
        const error = {
            type: '',
            message: ''
        };

        if (options === null) {
            error.type = 'Object';
            error.message = 'Options are null.';

            return next(error);
        }

        if (!options) {
            error.type = 'Object';
            error.message = 'Options are undefined.';

            return next(error);
        }

        if (options.hasOwnProperty('observe') && typeof(options.observe) !== 'boolean') {
            error.type = 'options.observe';
            error.message = 'Observe property is not a boolean.';

            return next(error);
        }

        if (options.hasOwnProperty('config')) {
            if (options.config.hasOwnProperty('name') && typeof(options.config.name) !== 'string') {
                error.type = 'options.config.name';
                error.message = 'Config name is not a string.';

                return next(error);
            }

            if (options.config.hasOwnProperty('props')) {
                ['width', 'height', 'stroke-width'].forEach(prop => {
                    if (options.config.props.hasOwnProperty(prop) && typeof(options.config.props[prop]) !== 'number') {
                        error.type = `options.config.props.${prop}`;
                        error.message = `Config ${prop} property is not a number.`;

                        return next(error);
                    }
                });

                ['viewBox', 'fill', 'stroke', 'stroke-linecap', 'stroke-linejoin'].forEach(prop => {
                    if (options.config.props.hasOwnProperty(prop) && typeof(options.config.props[prop]) !== 'string') {
                        error.type = `options.config.props.${prop}`;
                        error.message = `Config ${prop} property is not a string.`;

                        return next(error);
                    }
                });
            }
        }

        next();
    }
}
