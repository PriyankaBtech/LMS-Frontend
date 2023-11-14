# Learning Managment System - Frontend


### Setup Instructions

1. clone the Project
```
git clone https://github.com/PriyankaBtech/Learning-Management-System.git
```

2. Move into the Directory

```
cd frontend_lms
```

3. Install Dependencies

```
npm install
```

4. Run the server

```
npm run dev
```

### Add Plugins and Dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. Import simple import sort

```
npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
'simple-import-sort/imports' : 'error'
```

3. Add simple import sort plugin in `.eslint.cjs`

```
plugins: [... , 'simple-import-sort']
```

4. To enable auto import sort in vscode
  
  - open settings.json
  - add the followig config
```
 "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```




