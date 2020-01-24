# sensei-microservices

## Linting setup
### eslint
1. Make sure eslint vs code extension is installed.
2. Eslint highlighting was enabled only when `eslint.workingDirectories` values were pointing to the specific files to show linting
3. For making babel plugin module resolver compatible with eslint and vs code, look at this document: https://www.robinwieruch.de/babel-module-resolver
4. Be sure to have this in your .vscode/settings.json file: 
"editor.formatOnSave": true,
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.enable": true,
    "eslint.format.enable": true,
    "eslint.codeActionsOnSave.mode": "problems",
    
