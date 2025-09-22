export class InventoryUI {
    private modalId = 'char-sheet-modal';
    private currentInventoryId = 'equipped';

    public openModal(): void {
        // Check ob Modal schon existiert
        if ($(`#${this.modalId}`).length > 0) {
            return;
        }

        const modalHtml = this.createModalHTML();
        $('body').append(modalHtml);

        this.attachEventHandlers();

        // Öffne Dialog
        const dialog = $(`#${this.modalId}`)[0] as HTMLDialogElement;
        dialog.showModal();
    }

    private createModalHTML(): string {
        return `
            <dialog id="${this.modalId}" class="char-sheet-modal">
                <div class="char-sheet-modal-content">
                    <div class="char-sheet-modal-header">
                        <h3>Inventar</h3>
                        <span class="char-sheet-modal-close">×</span>
                    </div>
                    <div class="char-sheet-modal-body">
                        ${this.createInventoryContent()}
                    </div>
                </div>
            </dialog>
        `;
    }

    private createInventoryContent(): string {
        return `
            <div class="inventory-container">
                <!-- Inventar Dropdown -->
                <div class="inventory-selector">
                    <label for="inventory-dropdown">Aktuelles Inventar:</label>
                    <select id="inventory-dropdown" class="inventory-dropdown">
                        <option value="equipped">Ausgerüstet</option>
                        <option value="backpack">Rucksack</option>
                        <option value="chest">Truhe im Lager</option>
                    </select>
                </div>

                <!-- Items Liste -->
                <div class="inventory-items-list">
                    ${this.createItemsList()}
                </div>

                <!-- Add Item Button -->
                <div class="inventory-actions">
                    <button class="menu_button" id="add-item-btn">
                        <i class="fa-solid fa-plus"></i>
                        Neues Item
                    </button>
                </div>
            </div>
        `;
    }

    private createItemsList(): string {
        // TODO: Später aus echten Daten generieren
        const mockItems = [
            { id: '1', name: 'Eisenschwert', description: 'Ein stabiles Schwert', origin: 'Schmied in Dorf' },
            { id: '2', name: 'Lederbeutel', description: 'Kleiner Beutel für Münzen', origin: 'Markt' }
        ];

        return mockItems.map(item => this.createItemElement(item)).join('');
    }

    private createItemElement(item: any): string {
        return `
            <div class="inventory-item" data-item-id="${item.id}">
                <div class="inventory-item-header">
                    <i class="fa-solid fa-chevron-right item-toggle"></i>
                    <span class="item-name">${item.name}</span>
                </div>
                <div class="inventory-item-content" style="display: none;">
                    <div class="item-fields">
                        <label>Beschreibung:</label>
                        <textarea class="item-description" readonly>${item.description}</textarea>

                        <label>Herkunft:</label>
                        <textarea class="item-origin" readonly>${item.origin}</textarea>
                    </div>
                    <div class="item-actions">
                        <button class="menu_button menu_button_icon item-rename" title="Umbenennen">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="menu_button menu_button_icon item-move" title="Verschieben">
                            <i class="fa-solid fa-exchange"></i>
                        </button>
                        <button class="menu_button menu_button_icon item-equip" title="Ausrüsten">
                            <i class="fa-solid fa-shirt"></i>
                        </button>
                        <button class="menu_button menu_button_icon item-delete" title="Löschen">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    private attachEventHandlers(): void {
        const dialog = $(`#${this.modalId}`)[0] as HTMLDialogElement;

        // Close button
        $('.char-sheet-modal-close').on('click', () => {
            dialog.close();
        });

        // Click auf Backdrop
        $(`#${this.modalId}`).on('click', function(e) {
            if (e.target === this) {
                dialog.close();
            }
        });

        // Clean up nach dem Schließen
        $(`#${this.modalId}`).on('close', function() {
            $(this).remove();
        });

        // Dropdown Handler
        $('#inventory-dropdown').on('change', (e) => {
            this.currentInventoryId = $(e.target).val() as string;
            this.refreshItemsList();
        });

        // Item Toggle (auf/zuklappen)
        $(document).on('click', '.inventory-item-header', function() {
            const $item = $(this).parent();
            const $content = $item.find('.inventory-item-content');
            const $toggle = $(this).find('.item-toggle');

            if ($content.is(':visible')) {
                $content.slideUp(200);
                $toggle.removeClass('fa-chevron-down').addClass('fa-chevron-right');
            } else {
                $content.slideDown(200);
                $toggle.removeClass('fa-chevron-right').addClass('fa-chevron-down');
            }
        });

        // Item Action Buttons
        $(document).on('click', '.item-rename', (e) => {
            e.stopPropagation();
            console.log('Rename item');
        });

        $(document).on('click', '.item-delete', (e) => {
            e.stopPropagation();
            console.log('Delete item');
        });
    }

    private refreshItemsList(): void {
        console.log(`Switching to inventory: ${this.currentInventoryId}`);
        // TODO: Lade Items für das gewählte Inventar
    }
}
