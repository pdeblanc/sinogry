const gulp = require('gulp'),
      postcss =require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      mixins = require('postcss-mixins'),
		  hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
   return gulp.src('./app/assets/styles/style.css')
   .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
   .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');  // to prevent gulp to stop watch when any css typo
   })
   .pipe(gulp.dest('./app/temp/styles'))  // need to type 'gulp styles' on terminal
})
