---
title: 019 Gulp  - tslint
## Heading ##
tags: 
- AngularJS
- Angular2
- Gulp
- Bower
- npm
- nodejs
- github
- Visual Studio Code
- JavaScript
- TypeScript

---

###http://robertdunaway.github.io

##[Gulp code kata list](http://mycodekatas.github.io/gulp.html)
##[All code katas lists](http://mycodekatas.github.io/)

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 

# 019 Gulp  - tslint

## Duration
5 minutes

## Brief
Add a linter to run over our TypeScript code.

### For more information 
BING/GOOGLE: “Gulp typescript lint”

Book: 
[Gulp - Quick guide to getting up and running today](http://www.amazon.com/Gulp-Quick-guide-getting-running-ebook/dp/B010NXMFF6/)
<br>
<img src="https://raw.githubusercontent.com/robertdunaway/gulp-book/master/bookcoverimage.PNG" alt="Smiley face" height="150" width="150">



## Instructions
Get tutorial folder or the entire katas-Gulp repo.
Open the `[before/*.sln]` file and execute the kata.
Feel free to execute this kata multiple times because repetition creates motor memory.

## Github
 - Before (start kata with this)
  - https://github.com/robertdunaway/katas-gulp/tree/master/019%20Gulp%20%20-%20tslint/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/019%20Gulp%20%20-%20tslint/after


# Kata
Add a linter to run over our TypeScript code.

# Review
Add the required plugins.
<br>
```

npm install gulp-tslint --save-dev


```
<br>
Add references
<br>
```javascript

, tslint = require('gulp-tslint')

Add the task
gulp.task('tslint', function () {
    return gulp.src(['./wwwroot/**/*.ts', '!wwwroot/lib/**/*.*'])
        .pipe(tslint())
        .pipe(tslint.report('verbose', {
            emitError: true,
            sort: true,
            bell: true
        }));
});


```
<br>
Add the new task to the default task.
<br>
```javascript

gulp.task('default', function () {
    runSequence('clean-wwwroot', 'copy-to-wwwroot', 'tscompile', 'tslint');
});


```
<br>
NOTE: This needs a good reporter that writes to a HTML file similar to jshint.



##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 