<div align="center">
  <div><b>alt-up</b></div>
  <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/>
  <div>vsCode extension to navigate files intuitively</div>
  <div align="center">
    <sub>
      by
      <a href="https://github.com/spencermountain">Spencer Kelly</a> 
    </sub>
  </div>
  <img height="25px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
</div>

[![Marketplace](https://vsmarketplacebadge.apphb.com/version/spencermountain.alt-up.svg)](https://marketplace.visualstudio.com/items/spencermountain.alt-up)

[![Installs](https://vsmarketplacebadge.apphb.com/installs/spencermountain.alt-up.svg)](https://marketplace.visualstudio.com/items/spencermountain.alt-up)

---

Most file explorers support the _'alt-up'_ keyboard shortcut, to navigate up a directory.

This is a vsCode extension to implement this, in an intuitive way.

### Commands

#### Alt-up
* looks for a parent `'../index'` file with the same extension
* if not found, looks for files in root with same extension
* (does not go above workspace root)

#### Alt-down
* looks for files in child directories with the same extension
* if there are choices, creates a dropdown to choose


- **Alt-down** - looks for `./foo/index` files, offers dropdown if multiple
- **Alt-go-left** - looks for sibling files
- **Alt-go-right** - looks for sibling files

The extension was build with this mental-model for navigation,
![file-tree](./tree-simple.png)

but because the vscode looks like this,
![side-bar](./sidebar.png)

it may make sense to 'rotate' your keybindings 90deg:

```json
[
  {
    "key": "ctrl+left",
    "command": "extension.alt-up"
  },
  {
    "key": "ctrl+right",
    "command": "extension.alt-down"
  },
  {
    "key": "ctrl+up",
    "command": "extension.alt-neighbor-left"
  },
  {
    "key": "ctrl+right",
    "command": "extension.alt-neighbor-right"
  }
]
```

## See also

- [what-links-here](https://github.com/spencermountain/what-links-here)

MIT

<!--
cp -r /Users/spencer/mountain/alt-up ~/.vscode/extensions
-->
