import fs from 'fs';
import path from 'path';

export default class Tagger {
    /**
     * Outputs tags to a tags.json file
     * @return {string | boolean} Returns error or true if successful
     */
    static outputTags() {
        const tagsJson = JSON.stringify(Tagger.tags);

        fs.writeFile(path.resolve(__dirname, '../configs/tags.json'), tagsJson, 'utf8', err => {
            if (err) return err;
            return true;
        });
    }

    /**
     * Returns map of tags and aliases
     * @return {object[]} Tags array of icon objects
     */
    static get tags() {
        return [
            {
                name: 'add-circle',
                aliases: ['plus-circle']
            },
            {
                name: 'add-square',
                aliases: ['plus-square']
            },
            {
                name: 'add',
                aliases: ['plus']
            },
            {
                name: 'alert-circle',
                aliases: []
            },
            {
                name: 'alert-square',
                aliases: []
            },
            {
                name: 'alert-triangle',
                aliases: []
            },
            {
                name: 'align-center',
                aliases: []
            },
            {
                name: 'align-justify',
                aliases: []
            },
            {
                name: 'align-left',
                aliases: []
            },
            {
                name: 'align-right',
                aliases: []
            },
            {
                name: 'arrow-down-left',
                aliases: []
            },
            {
                name: 'arrow-down-right',
                aliases: []
            },
            {
                name: 'arrow-down',
                aliases: []
            },
            {
                name: 'arrow-left',
                aliases: []
            },
            {
                name: 'arrow-right',
                aliases: []
            },
            {
                name: 'arrow-up-left',
                aliases: []
            },
            {
                name: 'arrow-up-right',
                aliases: []
            },
            {
                name: 'arrow-up',
                aliases: []
            },
            {
                name: 'browsers',
                aliases: []
            },
            {
                name: 'bubble-circle',
                aliases: ['chat-circle']
            },
            {
                name: 'bubble-square',
                aliases: ['chat-square']
            },
            {
                name: 'chevron-down',
                aliases: []
            },
            {
                name: 'chevron-left',
                aliases: []
            },
            {
                name: 'chevron-right',
                aliases: []
            },
            {
                name: 'chevron-up',
                aliases: []
            },
            {
                name: 'circle-dashed',
                aliases: []
            },
            {
                name: 'circle',
                aliases: ['ellipse']
            },
            {
                name: 'clock',
                aliases: ['time']
            },
            {
                name: 'code',
                aliases: []
            },
            {
                name: 'disc',
                aliases: []
            },
            {
                name: 'download',
                aliases: []
            },
            {
                name: 'expand',
                aliases: []
            },
            {
                name: 'file-add',
                aliases: ['file-plus']
            },
            {
                name: 'file-remove',
                aliases: ['file-minus']
            },
            {
                name: 'file-text',
                aliases: []
            },
            {
                name: 'folder',
                aliases: []
            },
            {
                name: 'grid',
                aliases: []
            },
            {
                name: 'info-circle',
                aliases: []
            },
            {
                name: 'info-square',
                aliases: []
            },
            {
                name: 'lapse',
                aliases: []
            },
            {
                name: 'lock',
                aliases: []
            },
            {
                name: 'mail-read',
                aliases: []
            },
            {
                name: 'mail',
                aliases: []
            },
            {
                name: 'maximize',
                aliases: []
            },
            {
                name: 'minimize',
                aliases: []
            },
            {
                name: 'minus',
                aliases: ['remove']
            },
            {
                name: 'more-horizontal',
                aliases: [],
                allowFill: true
            },
            {
                name: 'more-vertical',
                aliases: [],
                allowFill: true
            },
            {
                name: 'navigation-ne',
                aliases: []
            },
            {
                name: 'navigation-nw',
                aliases: []
            },
            {
                name: 'navigation',
                aliases: []
            },
            {
                name: 'push-down',
                aliases: []
            },
            {
                name: 'push-left',
                aliases: []
            },
            {
                name: 'push-right',
                aliases: []
            },
            {
                name: 'push-up',
                aliases: []
            },
            {
                name: 'remove-circle',
                aliases: ['minus-circle']
            },
            {
                name: 'remove-square',
                aliases: ['minus-square']
            },
            {
                name: 'search',
                aliases: ['magnifier']
            },
            {
                name: 'shrink',
                aliases: []
            },
            {
                name: 'sidebar-bottom',
                aliases: []
            },
            {
                name: 'sidebar-left',
                aliases: []
            },
            {
                name: 'sidebar-right',
                aliases: []
            },
            {
                name: 'sidebar-top',
                aliases: []
            },
            {
                name: 'signal',
                aliases: []
            },
            {
                name: 'square',
                aliases: []
            },
            {
                name: 'stopwatch',
                aliases: []
            },
            {
                name: 'support',
                aliases: ['help']
            },
            {
                name: 'thumbs-down',
                aliases: []
            },
            {
                name: 'thumbs-up',
                aliases: []
            },
            {
                name: 'tick',
                aliases: ['check']
            },
            {
                name: 'triangle',
                aliases: []
            },
            {
                name: 'unlock',
                aliases: []
            },
            {
                name: 'upload',
                aliases: ['share']
            },
            {
                name: 'user-add',
                aliases: ['user-plus']
            },
            {
                name: 'user-check',
                aliases: ['user-tick']
            },
            {
                name: 'user-remove',
                aliases: ['user-minus']
            },
            {
                name: 'user-x',
                aliases: ['user-delete']
            },
            {
                name: 'user',
                aliases: []
            },
            {
                name: 'volume-down',
                aliases: []
            },
            {
                name: 'volume-mute',
                aliases: []
            },
            {
                name: 'volume-off',
                aliases: []
            },
            {
                name: 'volume-up',
                aliases: []
            },
            {
                name: 'x-circle',
                aliases: []
            },
            {
                name: 'x-square',
                aliases: []
            },
            {
                name: 'x',
                aliases: ['close']
            },
            {
                name: 'zoom-in',
                aliases: []
            },
            {
                name: 'zoom-out',
                aliases: []
            }
        ]
    }
}
