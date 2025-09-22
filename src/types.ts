// Basis Item Interface
interface Item {
    id: string;  // Unique ID für interne Verwaltung
    name: string;
    description: string;
    origin: string;  // Herkunft/Wo gefunden
    isContainer: boolean;  // Ist es selbst ein Inventar?
    equippedAt?: string;  // Nur gesetzt, wenn ausgerüstet
    containerId?: string;  // In welchem Inventar liegt es?
}

// Mögliche Ausrüstungsslots
export const EQUIPMENT_SLOT_SUGGESTIONS: string[] = [
    'head',
    'neck',
    'shoulders',
    'chest',
    'hands',
    'ring_left',
    'ring_right',
    'waist',
    'legs',
    'feet',
    'main_hand',
    'off_hand',
    'back',
    'belt',
];  // Für Beutel

// Inventar Container
interface Inventory {
    id: string;
    name: string;
    location: string;  // "Auf Rücken", "Lager im Wald", etc.
    items: Map<string, Item>;  // ItemId -> Item
}

// Der gesamte Character Sheet State
interface CharacterSheet {
    // Das "Ausgerüstet" Inventar. Alle Items die der Charakter direkt am Körper trägt
    equippedItems: Map<string, Item>;
    // alle zusätzlichen Inventare, auf die der Charakter potenziell Zugriff hat.
    additionalInventories: Map<string, Inventory>;  // InventoryId -> Inventory
}