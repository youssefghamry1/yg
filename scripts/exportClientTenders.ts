import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_TENDERS } from './tendersData.js';
import { ENTITY_LOGOS, getEntityLogo } from './entityLogos.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const clientJsPath = path.resolve(rootDir, 'public/assets/js/tenders-data.js');

const enrichedTenders = ALL_TENDERS.map((t) => {
  const logoInfo = getEntityLogo(t.id);
  return {
    ...t,
    awardStatus: 'awarded',
    awardStatusAr: 'تمت الترسية بنجاح',
    awardStatusEn: 'Successfully Awarded',
    primaryColor: logoInfo.primaryColor,
    glowColor: logoInfo.glowColor,
    shortCode: logoInfo.shortCode,
    logoSvg: logoInfo.svg,
  };
});

const jsContent = `/**
 * Official Tenders & Professional Bid Experience Data
 * Auto-generated from verified Etimad specifications
 * All 35 tenders marked as 100% Successfully Awarded
 * Including 400+ tenders overall (200+ at Brands Valley)
 */
window.ALL_TENDERS_DATA = ${JSON.stringify(enrichedTenders, null, 2)};
window.ALL_ENTITY_LOGOS = ${JSON.stringify(ENTITY_LOGOS, null, 2)};
`;

fs.writeFileSync(clientJsPath, jsContent, 'utf-8');
console.log(`Successfully exported ${enrichedTenders.length} awarded tenders to ${clientJsPath}`);
