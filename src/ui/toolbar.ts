import {InventoryUI} from "./inventory";

export class ToolbarUI {
    public createToolbar(inventoryUI: InventoryUI): void {
        const toolbarHtml = `
        <div id="char-sheet-toolbar" class="char-sheet-toolbar">
            <button id="cs-inventory-btn" class="menu_button menu_button_icon">
                <i class="fa-solid fa-backpack"></i>
                <span>Inventory</span>
            </button>
        </div>
    `;

        const sendTextarea = $("#send_textarea");
        const parentContainer = sendTextarea.parent();
        parentContainer.before(toolbarHtml);

        // Event Handler mit der neuen Klasse
        $("#cs-inventory-btn").on("click", () => {
            console.log("Inventar Button clicked!");
            inventoryUI.openModal();
        });
    }
}