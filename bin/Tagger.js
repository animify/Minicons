import fs from 'fs';
import path from 'path';

export default class Tagger {
    /**
     * Tags objects with aliases and fill settings
     * @param {object[]} icons Array of icons from Parser
     * @return {object[]} Returns object of tagged icons
     */
    static tag(icons) {
        const emptyTags = Tagger.emptyTags(icons);
        const aliasTags = Tagger.tags;

        return emptyTags.filter( defaultTag => ! aliasTags.find ( aliasTag => defaultTag.name === aliasTag.name) ).concat(aliasTags);
    }

    /**
     * Creates a list of icons objects with empty tags
     * @param {object[]} icons Array of icons from Parser
     * @return {object[]} Returns object of empty tags
     */
    static emptyTags(icons) {
        return icons.map(icon => {
            return {
                name: icon.name,
                aliases: []
            };
        });
    }

    /**
     * Returns map of tags and aliases
     * @return {object[]} Returns array of available aliases and options
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
                name: 'bubble-circle',
                aliases: ['chat-circle']
            },
            {
                name: 'bubble-square',
                aliases: ['chat-square']
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
                name: 'file-add',
                aliases: ['file-plus']
            },
            {
                name: 'file-remove',
                aliases: ['file-minus']
            },
            {
                name: 'minus',
                aliases: ['remove']
            },
            {
                name: 'more-horizontal',
                aliases: [],
                fillTag: 'path'
            },
            {
                name: 'more-vertical',
                aliases: [],
                fillTag: 'path'
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
                name: 'support',
                aliases: ['help']
            },
            {
                name: 'tick',
                aliases: ['check']
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
            }
        ]
    }
}
