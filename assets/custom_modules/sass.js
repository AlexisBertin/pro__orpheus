exports.task = {
  dist: {
    options: {
      style: 'expanded',
      lineNumbers: true,
      sourcemap: 'none'
    },
    files: [{
      expand: true,
      cwd: 'assets/css/sass/',
      src: [ 'main.scss' ],
      dest: 'assets/css/',
      ext: '.css'
    }]
  }
};