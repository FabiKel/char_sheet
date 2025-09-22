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

    // Erstelle Dialog Element
    const dialog = $('<dialog>', {
        id: 'char-sheet-modal',
        class: 'char-sheet-modal'
    });

    const modalContent = $('<div>', {
        class: 'char-sheet-modal-content'
    });

    const modalHeader = $('<div>', {
        class: 'char-sheet-modal-header'
    }).append(
        $('<h3>').text('Inventar'),
        $('<span>', {
            class: 'char-sheet-modal-close',
            text: '×',
            click: () => (dialog[0] as HTMLDialogElement).close()
        })
    );

    const modalBody = $('<div>', {
        class: 'char-sheet-modal-body'
    }).append(
        $('<p>').text('Hier kommt das Inventar hin!')
    );

    modalContent.append(modalHeader, modalBody);
    dialog.append(modalContent);
    $('body').append(dialog);

    // Öffne Dialog als Modal
    (dialog[0] as HTMLDialogElement).showModal();

    // Clean up nach dem Schließen
    dialog.on('close', () => {
        dialog.remove();
    });

    // Click auf Backdrop (außerhalb) schließt auch
    dialog.on('click', function(e) {
        const rect = (this as HTMLElement).getBoundingClientRect();
        const isInDialog = (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );

        if (!isInDialog) {
            (this as HTMLDialogElement).close();
        }
    });
}

