import {InventoryUI} from "./ui/inventory";
import {ToolbarUI} from "./ui/toolbar";

jQuery(() => {
    console.log("[Character Sheet] Extension loading...");

    const extensionName = "char_sheet";
    const extensionDisplayName = "Character Sheet";

    const inventoryUI = new InventoryUI();
    const toolbarUI = new ToolbarUI();

    // Zeigt, dass die Extension läuft
    const settingsHtml = `
        <div class="char-sheet-settings">
            <div class="inline-drawer">
                <div class="inline-drawer-toggle inline-drawer-header">
                    <b>${extensionDisplayName}</b>
                    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                </div>
                <div class="inline-drawer-content">
                    <p>Character Sheet Extension loaded! Version 0.1.1</p>
                </div>
            </div>
        </div>
    `;

    $("#extensions_settings").append(settingsHtml);

    // UI Toolbar erstellen
    toolbarUI.createToolbar(inventoryUI);

    console.log("[Character Sheet] Extension loaded successfully!");
});


