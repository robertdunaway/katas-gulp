---
title: 003 Gulp - multiple tasks & vs
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

##[Gulp code kata list](http://mycodekatas.github.io/Gulp.html)
##[All code katas lists](http://mycodekatas.github.io/)

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 

# [000 Gulp - ]

## Duration
 5 minutes

## Brief
Using the existing gulpfile.js add three new tasks.

### For more information 
BING/GOOGLE: “Gulp multiple tasks”

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
  - https://github.com/robertdunaway/katas-gulp/tree/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/before
 - After
  - https://github.com/robertdunaway/katas-gulp/tree/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/after


# Kata

Using the existing gulpfile.js create three new functions named “`task1`”, “`task2`” and “`task3`” and then execute them as part of the `default` task.

<br>
# Review
<br>
The task could look like the following.

<br>
```

gulp.task('task1', function () {
    console.log('my first gulp task…');
});

gulp.task('task2', function () {
    console.log('my second gulp task…');
});

gulp.task('default', function () {
    console.log('my third gulp task…');
});


```

<br>

Adding these task to the default task.

<br>

```

gulp.task('default', ['task1', 'task2', 'task3']);


```

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/1.png">

<br>

Now execute the `default` task.

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/003%20Gulp%20-%20multiple%20tasks%20%26%20vs/2.png">



##Next
Take a few minutes and imagine more examples. 

<br>

 <img src="https://raw.githubusercontent.com/robertdunaway/katas-gulp/master/katas-Gulp-logo.png" alt="Smiley face" height="200" width="200"> 