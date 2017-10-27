#!/bin/bash
#
# Build Minicons
#
# Optimize and build icons:
# ./build.sh icons
#
# Optimize, build icons and create Minicons JS:
# ./build.sh


function DELETE_TEMP {
    rm -rf dist
    mkdir dist
}

function BUILD_ICONS {
    rm -rf dist/icons/*
    rm icons/i_Active.svg
    svgo --quiet --config=./configs/svgo.yml -f ./icons -o ./dist/icons
    npm run parse
    echo -e "\e[35m Minicons optimized and built.\033[0m"
}

function BUILD_JS {
    npm run package
    if [ -d '../Minicons-homepage/libs/static/assets/js' ]; then
        cp dist/minicons.js ../Minicons-homepage/libs/static/assets/js
        echo -e "\e[35m Copied JS to Minicons homepage.\033[0m"
    fi
    echo -e "\e[35m Minicons JS files built.\033[0m"
}

function RUN_TESTS {
    npm test
}

if [[ $1 == "icons" ]]; then
BUILD_ICONS
echo -e "\e[37m\e[42m Build completed.\033[0m"
elif [ $# -eq 0 ]; then
DELETE_TEMP
BUILD_ICONS
BUILD_JS
RUN_TESTS
echo -e "\e[37m\e[42m Build & test completed.\033[0m"
fi
