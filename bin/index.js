import Parser from './Parser';
import Tagger from './Tagger';

const parser = new Parser();
parser.parseIconFiles();
parser.mergeTags(Tagger.tag(parser.output.icons));
parser.outputJSON();
