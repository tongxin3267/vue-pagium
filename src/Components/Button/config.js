module.exports = {
    "name": 'button',
    "props": [{
        "name": "dialog",
        "label": "打开对话框-选择组件",
        "value": "refer",
        property: 'open'
    }, {
        "name": "title",
        "label": "文本",
        "value": "string"
    }, {
        "name": "size",
        "label": "尺寸",
        "value": "select",
        "options": ["medium", "small", "mini"]
    }, {
        "name": "type",
        "label": "类型",
        "value": "select",
        "options": ["primary", "success", "warning", "danger", "info", "text"]
    }, {
        "name": "plain",
        "label": "是否朴素按钮",
        "value": "boolean"
    }, {
        "name": "round",
        "label": "是否圆形按钮",
        "value": "boolean"
    }, {
        "name": "icon",
        "label": "图标类名",
        "value": "string"
    },{
        "name": "marginTop",
        "label": "margin-top(px)",
        "value": "number"
    }]
}