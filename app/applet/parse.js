const fs = require('fs');
const path = require('path');

function parseData() {
  const filePath = path.join(__dirname, 'dados.tsv');
  if (!fs.existsSync(filePath)) {
    console.log('Arquivo dados.tsv não encontrado. Por favor, faça o upload do arquivo.');
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').map(l => l.trim()).filter(l => l);
  
  const distributors = {};
  
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split('\t');
    if (cols.length < 7) continue;
    
    const name = cols[0].trim();
    const phone = cols[1].trim();
    const whatsapp = cols[2].trim();
    const site = cols[3].trim();
    const instagram = cols[4].trim();
    const cityUF = cols[5].trim();
    const stateUF = cols[6].trim();
    
    if (!name) continue;
    
    if (!distributors[name]) {
      const stateMatch = stateUF.match(/\(([A-Z]{2})\)/);
      const state = stateMatch ? stateMatch[1] : stateUF;
      
      distributors[name] = {
        id: Object.keys(distributors).length + 1,
        name,
        state,
        cities: [],
        phone: whatsapp || phone,
        instagram: instagram.replace('@', ''),
        site,
        lat: 0, 
        lng: 0
      };
    }
    
    const cityMatch = cityUF.match(/(.+?)\s*\(/);
    const city = cityMatch ? cityMatch[1].trim() : cityUF;
    
    if (!distributors[name].cities.includes(city)) {
      distributors[name].cities.push(city);
    }
  }
  
  const result = Object.values(distributors);
  const outPath = path.join(__dirname, 'app/data/distributors.json');
  
  if (!fs.existsSync(path.dirname(outPath))) {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
  }
  
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(`Sucesso! Processados ${result.length} distribuidores com um total de ${result.reduce((acc, d) => acc + d.cities.length, 0)} cidades.`);
}

parseData();
