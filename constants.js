const ACTION_TYPES = {
    FETCH : "fetch data",
    FETCH_SUCCESS : "receive data",
    FETCH_ERROR : "fetch error",

    DELETE : "delete data",
    DELETE_SUCCESS : "delete complete",
    DELETE_ERROR : "delete failed",

    SAVE_NEW : "save new data",
    SAVE_NEW_SUCESS : "save complete",
    SAVE_NEW_ERROR : "save failed",

    SAVE_EXISTING : "save existing data",
    SAVE_EXISTING_SUCESS : "save complete",
    SAVE_EXISTING_ERROR : "save failed",

    CLICK_BUTTON : "click button",
    CLICK_LINK : "click link",
    MOUSEOVER : "hover",
    MOUSEOUT : "mouse away",
    TYPE : "enter text",
    SUBMIT : "submit form",
    FOCUS : "enter form field",
    SELECT_SINGLE : "select from dropdown",
    SELECT_MULTIPLE : "select from multiselect"
};

const MODE_TYPES = {
    SHOW_DETAILS : "show item details",
    VIEW_LIST : "view list",
    VIEW_ITEM : "view item",
    EDIT_ITEM : "edit item",
    DELETE_ITEM : "delete item",
    MULTISELECT : "select items from list",
    ADD_NEW_ITEM : "add item to list",
    CREATE_ITEM : "create new item"
};
