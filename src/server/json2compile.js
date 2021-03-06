const utils = require('../utils/utils')
const checkDataValid = require('../utils/checkDataValid')
const scheme2Default = require('../utils/scheme2Default');

module.exports = function (data, allComsConfig, allPages) {

    //严格检查合法性
    checkDataValid(data, allComsConfig, allPages)

    //检测重复组件名
    let allComsName = utils.getAllComNameInData(data.components || []);

    function traverse(list) {
        let result = []
        list.forEach(item => {
            let config = allComsConfig[item.type];

            let node = {
                name: item.name,
                type: item.type,
                __pg_slot__: false
            }

            node.children = item.children ? traverse(item.children) : [];

            node.props = item.props ? utils.patchProps(item.props, config) : {};

            //slot、refer 合法性检查、添加属性
            for (let key in node.props) {
                node.props[key] = utils.parseSlot(key, node.props[key], node, (name) => {
                    return allComsName.find(e => {
                        return e === name
                    })
                }, (name) => {
                    let ret;
                    utils.traverse((item) => {
                        if (item.name === name) {
                            ret = allComsConfig[item.type].exposeProperty
                        }
                    }, data.components)
                    return ret;
                }, true)
            }

            node.props = {
                ...scheme2Default(config.props),
                ...node.props,
                _name:node.name
            }

            result.push(node)
        })
        return result;
    }
    return {
        page: data.page,
        components: traverse(data.components || []),
    }
}