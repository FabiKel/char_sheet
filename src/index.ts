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
    // Check ob Modal schon existiert
    if ($("#char-sheet-modal").length > 0) {
        return;
    }

    const modalHtml = `
        <dialog id="char-sheet-modal" class="char-sheet-modal">
            <div class="char-sheet-modal-content">
                <div class="char-sheet-modal-header">
                    <h3>Inventar</h3>
                    <span class="char-sheet-modal-close">×</span>
                </div>
                <div class="char-sheet-modal-body">
                    <p>Hier kommt das Inventar hin!</p>
                </div>
            </div>
        </dialog>
    `;

    $('body').append(modalHtml);

    const dialog = $('#char-sheet-modal')[0] as HTMLDialogElement;

    // Event Handlers
    $('.char-sheet-modal-close').on('click', () => {
        dialog.close();
    });

    // Click auf Backdrop schließt Dialog
    $('#char-sheet-modal').on('click', function(e) {
        if (e.target === this) {
            dialog.close();
        }
    });

    // Clean up nach dem Schließen
    $('#char-sheet-modal').on('close', function() {
        $(this).remove();
    });

    // Öffne als Modal
    dialog.showModal();
}


