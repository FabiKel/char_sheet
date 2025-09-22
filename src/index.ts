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
                    <p>Character Sheet Extension loaded! Version 0.1.1</p>
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
                <span>Inventory</span>
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
        openInventoryModal();
    });
}

function openInventoryModal(): void {
    // Erstelle ein div Element statt String
    const modal = document.createElement('div');
    modal.id = 'char-sheet-modal';
    modal.className = 'modal';
    modal.style.display = 'block'; // Explizit sichtbar machen
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.zIndex = '9999';

    modal.innerHTML = `
        <div class="modal-content" style="
            position: relative;
            margin: 5% auto;
            padding: 20px;
            width: 80%;
            background: var(--SmartThemeBodyColor);
            border-radius: 10px;
        ">
            <div class="modal-header">
                <h3>Inventar</h3>
                <span id="cs-modal-close" style="cursor: pointer; font-size: 28px;">×</span>
            </div>
            <div class="modal-body">
                <p>Hier kommt das Inventar hin!</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close handler
    document.getElementById('cs-modal-close')?.addEventListener('click', () => {
        modal.remove();
    });
}
