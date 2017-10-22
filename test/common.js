import path from 'path';
import { use, expect, assert } from 'chai';
import chaiFs from 'chai-fs';
import Parser from '../bin/Parser';
import svgConfig from './../configs/svg.json';

use(chaiFs);

global.path = path;
global.assert = assert;
global.expect = expect;
global.Parser = Parser;
global.svgConfig = svgConfig;
