const { src, dest,series } = require('gulp');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');
const cleancss = require('gulp-clean-css');
const tailwindcss = require('tailwindcss');

const srcpathcss = 'src/css/styles.css'
const builpathcss = 'build/css/';
const buildpath = 'build/';

function css() {
    return src(srcpathcss)
    .pipe(postcss([
        tailwindcss('tailwind.js'),
        require('autoprefixer'),
    ]))        
    .pipe(purgecss({
        content: ['src/*.html']
    }))
    .pipe(cleancss())
    .pipe(dest(builpathcss));
}
  
function copy() {
    return src('src/index.html')
    .pipe(dest(buildpath))
}
exports.default = series(css,copy);