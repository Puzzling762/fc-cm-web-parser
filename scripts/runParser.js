import { loadPlayers } from '../src/parser/parser.js'; // adjust path if needed
import fs from 'fs';
import { parse } from 'json2csv';

const savePath = 'path/to/your/savefile.save';

async function main() {
  const players = await loadPlayers(savePath);

  // Example: filter Man Utd
  const utdPlayers = players.filter(p => p.current_team === "Man Utd");

  // Export CSV
  const csv = parse(utdPlayers);
  fs.writeFileSync('man_utd.csv', csv);

  console.log('CSV exported successfully!');
}

main();
