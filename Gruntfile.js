// Generated on 2014-03-29 using generator-webapp 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            handlebars: {
                files: [
                    '<%= config.app %>/modules/templates/*.hbs'
                ],
                tasks: 'handlebars'
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= config.app %>/images/{,*/}*',
                    '<%= config.app %>/modules/templates/*.hbs',
                    '<%= config.app %>/modules/templates/helpers/*.js'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: false,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= config.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: false,
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            postrequirejs: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>/scripts/**/*',
                        '!<%= config.dist %>/scripts/main.js',
                        '!<%= config.dist %>/scripts/require.js',
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js',
                '!<%= config.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js',
                '!app/scripts/require.js',
                '!app/scripts/lib/jquery.js',
                '!app/scripts/lib/domReady.js'
            ]
        },

        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= config.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= config.app %>/images',
                javascriptsDir: '<%= config.app %>/scripts',
                fontsDir: '<%= config.app %>/styles/fonts',
                importPath: '<%= config.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= config.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= config.app %>/index.html'],
                ignorePath: '<%= config.app %>/',
                exclude: ['<%= config.app %>/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js']
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: '<%= config.app %>/bower_components/'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        '<%= config.dist %>/images/{,*/}*.*',
                        '<%= config.dist %>/styles/fonts/{,*/}*.*',
                        '<%= config.dist %>/*.{ico,png}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        cssmin: {
            dist: {
                files: {
                    '<%= config.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        // '<%= config.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    src: '**/*.js',
                    dest: '<%= config.dist %>/scripts',
                    cwd: '<%= config.app %>/scripts'
                }]
                // files: {
                //     '<%= config.dist %>/scripts/require.js': [
                //         '<%= config.app %>/scripts/require.js'
                //     ],
                //     '<%= config.dist %>/scripts/main.js': [
                //         '<%= config.app %>/scripts/main.js'
                //     ],
                //     '<%= config.dist %>/scripts/messages/messages.js': [
                //         '<%= config.app %>/scripts/messages/messages.js'
                //     ],
                //     '<%= config.dist %>/scripts/lib/print.js': [
                //         '<%= config.app %>/scripts/lib/print.js'
                //     ],
                //     '<%= config.dist %>/scripts/lib/jquery.js': [
                //         '<%= config.app %>/scripts/lib/jquery.js'
                //     ]
                // }
            }
        },
        concat: {
            dist: {
                js: {
                    src: '**/*.js',
                    dest: '<%= config.dist %>/scripts/concat.js',
                    cwd: '<%= config.app %>/scripts'
                },
                // files: {
                //     // '<%= config.dist %>/scripts/require.js': [
                //     //     '<%= config.app %>/scripts/**/*'
                //     // ]
                // }
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        requirejs: {
            dist: {
                options: {
                    almond: true,

                    replaceRequireScript: [{
                        files: ['<%= config.dist %>/index.html'],
                        module: 'main'
                    }],

                    modules: [{name: 'main'}],

                    mainConfigFile: '<%= config.app %>/scripts/main.js', // contains path specifications and nothing else important with respect to config
                    dir: '<%= config.dist %>/scripts',
                    baseUrl: '<%= config.app %>/scripts',
                    useStrict: true,
                }
            }
        },
        handlebars: {
            options: {
                namespace: 'MyApp.Templates',
                processName: function(filePath) {
                    console.log(filePath);
                    return filePath
                        .replace(/app\/modules\/templates\//, '')
                        .replace(/\.hbs$/, '');
                }
            },
            all: {
                files: {
                    '<%= config.app %>/templates/templates.js': ['<%= config.app %>/modules/templates/**/*.hbs']
                }
            }
        },
        // handlebars: {
        //   compile: {
        //     files: {
        //       "temp/modules/compiled-templates.js": [
        //         "app/modules/*/templates/**/*.hbs"
        //       ]
        //     },
        //     options: {
        //       namespace: 'MyApp.Templates',
        //       wrapped: true, 
        //       processName: function(filename) {
        //         // funky name processing here
        //         return filename
        //                 .replace(/^app\/modules\//, '')
        //                 .replace(/\.hbs$/, '');
        //       }
        //     }
        //   }
        // },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'compass:server',
                'handlebars',
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass',
                'handlebars',
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',
            'mocha'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'handlebars',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'copy:dist',
        'requirejs:dist', // AFTER copy:dist!
        'clean:postrequirejs',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
