/// <reference types="SystemJS" />

var configuration: any = {
    baseURL: "./",
    transpiler: "typescript",
    map: {
        '@angular': 'node_modules/@angular',
        '@angular/*' : 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'app': 'app',
    },
    packages: {
        'rxjs': { main: 'rx.js', defaultExtension: 'js' },
        'app': { main: 'app', defaultExtension: 'js' },
        '@angular/platform-browser/animations' : { main: '../../platform-browser/bundles/platform-browser-animations.umd.js' },
        '@angular/animations/browser' : { main: '../../animations/bundles/animations-browser.umd.js' },
        defaultExtension: 'js'
    }
};

var ngPackageNames = [
    'animations',
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
];

// Add package entries for angular packages.
ngPackageNames.forEach((pkgName) => configuration.packages['@angular/' + pkgName] = {
    main: 'bundles/' + pkgName + '.umd.js',
    defaultExtension: 'js'
});

SystemJS.config(configuration);