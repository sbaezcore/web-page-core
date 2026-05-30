const fs = require('fs');

function extractDict(content, key) {
  let inSection = false;
  let dict = {};
  const lines = content.split('\\n');
  for (const line of lines) {
    if (line.includes(key + ': {')) inSection = true;
    else if (inSection && line.trim() === '},') inSection = false;
    else if (inSection && line.includes('home: {')) inSection = false;
    
    if (inSection && line.includes(': "')) {
      const match = line.match(/^\\s*([a-zA-Z0-9_]+):\\s*"(.*)",?$/);
      if (match) {
        dict[match[1]] = match[2];
      }
    }
  }
  return dict;
}

const enContent = fs.readFileSync('src/dictionaries/en.ts', 'utf8');

const buildTeamsDict = extractDict(enContent, 'buildTeams');
const runOpsDict = extractDict(enContent, 'runOperations');

function replaceFileContent(filePath, dictObj, componentName) {
  let code = fs.readFileSync(filePath, 'utf8');
  
  // Add dict prop
  code = code.replace(
    new RegExp('export default function ' + componentName + '\\(\\) \\{'),
    'export default function ' + componentName + '({ dict }: { dict: any }) {'
  );

  const keys = Object.keys(dictObj).sort((a, b) => dictObj[b].length - dictObj[a].length);

  for (const key of keys) {
    const value = dictObj[key];
    if (value.length > 5) {
      // Escape special characters in value for RegExp if needed, or just use split/join
      code = code.split(value).join(`{dict.${key}}`);
    }
  }

  fs.writeFileSync(filePath, code);
}

replaceFileContent('src/app/[lang]/buildTeams/BuildTeams.tsx', buildTeamsDict, 'BuildTeamsContent');
replaceFileContent('src/app/[lang]/runOperations/RunOperations.tsx', runOpsDict, 'RunOperationsContent');

console.log('TSX files updated!');
