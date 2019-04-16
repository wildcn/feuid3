
import fs from "fs-extra";
import path from "path";

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

import shell from 'shelljs';

import inquirer from 'inquirer';

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const success = chalk.greenBright;
const info = chalk.bold.blue;

import * as CONST from './data/constant.js';
import * as DATA from './data/data.js';

import ProjectReplaceSource from './ProjectReplaceSource.js';



export default class App {
    constructor( appRoot, projectRoot, packJSON, config, program ) {

        this.appRoot = appRoot;
        this.projectRoot = projectRoot;
        this.packJSON = packJSON;   
        this.config = config;
        this.program = program;

        console.log( info( packJSON.name ) );
        console.log( [ 
            'appRoot: ' + this.appRoot
            , 'projectRoot: ' + this.projectRoot 
            ].join("\n") );

        this.init();
    }

    init() {
        if( (!shell.which( 'git' ) ) ){
            console.error( error( 'feuid - git not exists' ) );
            return;
        }

        this.project = new ProjectReplaceSource( this );
    }

    fileExists( file ) {
        return fs.existsSync( file );
    }

}

export function init( APP_ROOT, PROJECT_ROOT, packJSON, config, program ){
    let AppIns = new App( APP_ROOT, PROJECT_ROOT, packJSON, config, program ); 
}

