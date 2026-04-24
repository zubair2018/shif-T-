// server/zones.js
// Zone-based area matching.
// Each zone contains areas that are close enough to match

export const ZONES = [
  {
    id: "srinagar",
    name: "Srinagar",
    areas: [
      "srinagar",
      "lal chowk",
      "residency road",
      "ma road",
      "batmaloo",
      "hyderpora",
      "rajbagh",
      "jawahar nagar",
      "sanat nagar",
      "bemina",
      "baghat",
      "hazratbal",
      "nishat",
      "shalimar",
      "rainawari",
      "nowhatta",
    ],
  },
  {
    id: "anantnag",
    name: "Anantnag",
    areas: [
      "anantnag",
      "anantnag town",
      "lal chowk islamabad",
      "islamabad",
      "bijbehara",
      "mattan",
      "achabal",
      "pahalgam",
      "kokernag",
      "verinag",
      "dooru",
      "shangus",
      "srigufwara",
      "sangam",
    ],
  },
  {
    id: "pulwama",
    name: "Pulwama",
    areas: [
      "pulwama",
      "pulwama town",
      "pampore",
      "tral",
      "awantipora",
      "lassipora",
      "rajpora",
      "kakapora",
    ],
  },
];

// Get zone ID for a given area name
export function getZoneForArea(areaName) {
  if (!areaName) return null;
  const normalized = areaName.trim().toLowerCase();

  for (const zone of ZONES) {
    for (const area of zone.areas) {
      if (
        normalized === area ||
        normalized.includes(area) ||
        area.includes(normalized)
      ) {
        return zone;
      }
    }
  }
  return null;
}

// Check if two areas are in the same zone
export function areasInSameZone(area1, area2) {
  if (!area1 || !area2) return false;
  const zone1 = getZoneForArea(area1);
  const zone2 = getZoneForArea(area2);
  if (!zone1 || !zone2) return false;
  return zone1.id === zone2.id;
}

// Get all areas in same zone as given area
export function getZoneAreas(areaName) {
  const zone = getZoneForArea(areaName);
  if (!zone) return [];
  return zone.areas;
}

// Get zone name for display
export function getZoneName(areaName) {
  const zone = getZoneForArea(areaName);
  return zone ? zone.name : null;
}