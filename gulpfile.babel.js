import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import del from 'del';
import run from 'run-sequence';

gulp.task('purge', next =>
    del(['/dist/icons/*', 'icons/i-Active.svg'], {
        force: true,
    }, next));

gulp.task('minify', () =>
    gulp.src('icons/*.svg')
        .pipe(svgmin({
            plugins: [
                {
                    removeTitle: true,
                },
                {
                    removeAttrs: {
                        attrs: '(fill|stroke.*)'
                    },
                },
            ],
        }))
        .pipe(gulp.dest('./dist/icons')));

gulp.task('optimize-icons', next => {
    run('purge', 'minify', next);
});
