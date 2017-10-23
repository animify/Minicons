import Parser from './Parser';
import Tagger from './Tagger';

const parser = new Parser();
Tagger.outputTags();
parser.parseIconFiles();
parser.outputJSON();
