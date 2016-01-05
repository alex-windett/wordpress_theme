# Generate a custom Wordpress theme using Grunt's Project Scaffolding

> Create a Wordpress theme with [grunt-init][]. It'll ask you for some basic info and the template files you'd like to include or exclude from the directory. The theme will use Foundation as the framework

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install `grunt-cli`

```
npm install -g grunt-cli
```

and `grunt-init`

```
npm install grunt-init
```

Once `grunt-init` is installed, it places scaffolding templates in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:



```
git@github.com:alex-windett/wordpress_theme.git/grunt-init.git ~/.grunt-init/wordpress_theme
```

## Usage

At the command-line, cd into the empty directory for your theme. `e.g. wp-content/themes/yourtheme` run this command and follow the prompts.

```
grunt-init wordpress_theme
```


The deafults for the prompts appear in the brackets and are set to "Yes" if nothing is given.

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

This task runs `bower install` and `npm install` in the process. This does take a while and no information is logged to the screen so don't worry - just let it do its thing.

To make sure everything is working run Grunt

```
grunt
```


There are also other fimilar commands included

`grunt dev`, `grunt common`, `grunt` etc


To change the settings for Foundation, update: `assets/scss/_settings.scss`
