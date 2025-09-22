jQuery(() => {
    console.log("[Character Sheet] Extension loading...");

    const extensionName = "char_sheet";
    const extensionDisplayName = "Character Sheet";

    // Zeigt, dass die Extension läuft
    const settingsHtml = `
        <div class="char-sheet-settings">
            <div class="inline-drawer">
                <div class="inline-drawer-toggle inline-drawer-header">
                    <b>${extensionDisplayName}</b>
                    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                </div>
                <div class="inline-drawer-content">
                    <p>Character Sheet Extension loaded! Version 0.1.0</p>
                </div>
            </div>
        </div>
    `;

    $("#extensions_settings").append(settingsHtml);

    // UI Toolbar erstellen
    createToolbar();

    console.log("[Character Sheet] Extension loaded successfully!");
});

function createToolbar(): void {
    // Toolbar HTML
    const toolbarHtml = `
        <div id="char-sheet-toolbar" class="char-sheet-toolbar">
            <button id="cs-inventory-btn" class="menu_button menu_button_icon">
                <i class="fa-solid fa-backpack"></i>
                <span>Inventar</span>
            </button>
        </div>
    `;

    // Einfügen über dem Textarea
    const sendTextarea = $("#send_textarea");
    const parentContainer = sendTextarea.parent();

    parentContainer.before(toolbarHtml);

    // Event Handler
    $("#cs-inventory-btn").on("click", () => {
        console.log("Inventar Button clicked!");
    });
}
