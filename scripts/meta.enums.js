/**
 * ### Модуль сборки *.js по описанию метаданных
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2019
 * @module  metadata-prebuild
 */

'use strict';

const fs = require('fs');
const path = require('path');

process.env.DEBUG = 'prebuild:,-not_this';
const debug = require('debug')('prebuild:');

const patch = require('./meta.patch');

debug('Читаем конструктор и плагины');

// путь настроек приложения
const settings_path = path.resolve(__dirname, '../config/app.settings.js');
const custom_constructors_path = path.resolve(__dirname, '../src/metadata/common/custom_constructors.js');

// текст модуля начальных настроек приложения для включения в итоговый скрипт
const settings = fs.readFileSync(settings_path, 'utf8');

// конфигурация подключения к CouchDB
const config = require(settings_path)();

// если истина, добавляем в текст комментарии
const jsdoc = Boolean(process.env.JSDOC);

// эти классы создадим руками
const custom_constructor = [
  'CatFormulasParamsRow',
  'CatCharacteristicsParamsRow',
  'DpBuyers_orderProduct_paramsRow',
  'CatProduction_paramsFurn_paramsRow',
  'CatProduction_paramsProduct_paramsRow',
  'CatProduction_paramsFurn_paramsRow',
  'CatInsertsProduct_paramsRow',
  'CatCnnsSizesRow',
  'CatInsertsSelection_paramsRow',
  'CatCnnsSelection_paramsRow',
  'CatFurnsSelection_paramsRow',
  'DocCredit_card_orderPayment_detailsRow',
  'DocDebit_bank_orderPayment_detailsRow',
  'DocCredit_bank_orderPayment_detailsRow',
  'DocDebit_cash_orderPayment_detailsRow',
  'DocCredit_cash_orderPayment_detailsRow',
  'CatProjectsExtra_fieldsRow',
  'CatStoresExtra_fieldsRow',
  'CatCharacteristicsExtra_fieldsRow',
  'DocPurchaseExtra_fieldsRow',
  'DocCalc_orderExtra_fieldsRow',
  'DocCredit_card_orderExtra_fieldsRow',
  'DocDebit_bank_orderExtra_fieldsRow',
  'DocCredit_bank_orderExtra_fieldsRow',
  'DocDebit_cash_orderExtra_fieldsRow',
  'DocCredit_cash_orderExtra_fieldsRow',
  'DocSellingExtra_fieldsRow',
  'CatBranchesExtra_fieldsRow',
  'CatPartnersExtra_fieldsRow',
  'CatNomExtra_fieldsRow',
  'CatOrganizationsExtra_fieldsRow',
  'CatDivisionsExtra_fieldsRow',
  'CatUsersExtra_fieldsRow',
  'CatProduction_paramsExtra_fieldsRow',
  'CatParameters_keysParamsRow',
];

// конструктор metadata-core и плагин metadata-pouchdb
const MetaEngine = require('metadata-core')
  .plugin(require('metadata-pouchdb'))
  .plugin(require('metadata-abstract-ui/meta'))
  .plugin(require('metadata-abstract-ui'));

debug('Создаём объект MetaEngine');

const $p = new MetaEngine();    // подключим метадату
let jstext = '';            // в этой переменной будем накапливать текст модуля

debug('Настраиваем MetaEngine');

// инициализация и установка параметров
$p.wsql.init((prm) => {

  // разделитель для localStorage
  prm.local_storage_prefix = config.local_storage_prefix;

  // по умолчанию, обращаемся к зоне 0
  prm.zone = config.zone;

  // расположение couchdb
  prm.couch_path = config.couch_local;

}, ($p) => {

  const db = new MetaEngine.classes.PouchDB(config.couch_local + 'meta', {
    skip_setup: true,
    auth: config.user_node,
  });

  debug(`Читаем описание метаданных из CouchDB ${config.couch_local}`);
  return db.info()
    .then((info) => {
      debug(`Подключение к ${info.host}`);
      return db.allDocs({
        include_docs: true,
        attachments: true,
        startkey: 'meta',
        endkey: 'meta\ufff0',
      });
  })
    .catch((err) => {
      debug('Не удалось получить объект meta из CouchDB\nПроверьте логин, пароль и строку подключения');
      debug(err);
      process.exit(1);
    })
    .then(({rows}) => {
      const _m = {};
      for(const {doc} of rows) {
        $p.utils._patch(_m, doc);
      }
      delete _m._id;
      delete _m._rev;

      // фильтруем и корректируем метаданные
      patch(_m, $p);

      return $p.md.init(_m);
    })
    .then((_m) => {

      debug('Создаём текст модуля конструкторов данных');
      let text = create_modules(_m);

      debug('Выполняем текст модуля, чтобы создать менеджеры данных');
      eval(text);

      text = create_modules(_m, true);

      debug('Записываем результат');
      let fname = path.resolve(__dirname, '../jsdoc/enums.js');
      fs.writeFile(fname, text, 'utf8', (err) => {
        if (err) {
          debug(err);
          process.exit(1);
        }
        else {
          debug(`Успешно записан > ${fname}`);
          process.exit(0);
        }
      });

      $p = null;

    })
    .catch((err) => {
      debug(err);
      process.exit(1);
    });
});


function create_modules(_m, jsdoc) {

  const sys_nsmes = ['log', 'meta_objs', 'meta_fields', 'scheme_settings'];
  const categoties = {
      cch: {mgr: 'ChartOfCharacteristicManager', proto: 'CatObj', dir: 'chartscharacteristics'},
      cacc: {mgr: 'ChartOfAccountManager', proto: 'CatObj'},
      cat: {mgr: 'CatManager', proto: 'CatObj', dir: 'catalogs'},
      bp: {mgr: 'BusinessProcessManager', proto: 'BusinessProcessObj'},
      tsk: {mgr: 'TaskManager', proto: 'TaskObj'},
      doc: {mgr: 'DocManager', proto: 'DocObj', dir: 'documents'},
      ireg: {mgr: 'InfoRegManager', proto: 'RegisterRow'},
      areg: {mgr: 'AccumRegManager', proto: 'RegisterRow'},
      dp: {mgr: 'DataProcessorsManager', proto: 'DataProcessorObj', dir: 'dataprocessors'},
      rep: {mgr: 'DataProcessorsManager', proto: 'DataProcessorObj', dir: 'reports'},
    };

  if(jsdoc) {
    let text = `
/**
 * Коллекция перечислений
 * @class Enumerations
 * @extends external:Enumerations`;
    const {enm} = $p;

    // менеджеры перечислений
    for (const name in _m.enm){
      const emeta = _m.enm[name].find(({tag}) => tag);
      if(emeta) {
        const ename = enm[name].obj_constructor();
        text += `\n * @prop ${name} {${ename}Manager} - ${emeta.tag}`;
      }
    }

    text += '\n */\n';

    for (const name in _m.enm){
      const edata = _m.enm[name];
      const emeta = edata.find(({tag}) => tag);
      const ename = enm[name].obj_constructor();

      text += `\n/**
 * Значение перечисления _${emeta.tag}_${emeta.description ? '<br/>' + emeta.description : ''}
 * @class ${ename}
 * @see ${ename}Manager
 */

/**
 * Менеджер перечисления _${emeta.tag}_${emeta.description ? '<br/>' + emeta.description : ''}
 * @class
 * @extends {external:EnumManager}`;

      for(const {order, latin, name, synonym} of edata) {
        if(order !== undefined) {
          text += `\n * @prop ${latin || name} {${ename}} - ${synonym}`;
        }
      }
      text += `\n */\nclass ${ename}Manager {}\n`;

      // text += `\n * @prop ${name} {${ename}} - Тип движения регистра накопления`;
    }

    return text;
  }
  else {
    let text = `(function(){
const {MetaEventEmitter,EnumManager,CatManager,DocManager,DataProcessorsManager,ChartOfCharacteristicManager,ChartOfAccountManager,
  InfoRegManager,AccumRegManager,BusinessProcessManager,TaskManager,CatObj,DocObj,TabularSectionRow,DataProcessorObj,
  RegisterRow,BusinessProcessObj,TaskObj} = $p.constructor.classes;
const _define = Object.defineProperties;
`;

    // менеджеры перечислений
    for (const name in _m.enm){
      text += `$p.enm.create('${name}');\n`;
    }
    return text + '})();\n';
  }

  // менеджеры объектов данных, отчетов и обработок
  // for (const category in categoties) {
  //   for (const name in _m[category]) {
  //     if (sys_nsmes.indexOf(name) == -1) {
  //       text += obj_constructor_text(_m, category, name, categoties);
  //     }
  //   }
  // }

  //text += fs.readFileSync(custom_constructors_path, 'utf8');

}

function obj_constructor_text(_m, category, name, categoties) {

  const {mgr, proto, dir} = categoties[category];

  const {DataManager} = MetaEngine.classes;
  let meta = _m[category][name],
    fn_name = DataManager.prototype.obj_constructor.call({class_name: category + '.' + name, constructor_names: {}}),
    text = jsdoc ? `\n/**\n* ${$p.msg.meta[category]} _${meta.name}_` : '',
    f, props = '';
  if(jsdoc && meta.illustration) {
    text += `<br/>\n* ${meta.illustration}`;
  }

  const filename = dir && path.resolve(__dirname, `../src/metadata/${dir}/${category}_${name}.js`);
  let extModule;
  if(dir && fs.existsSync(filename)) {
    try {
      extModule = require(filename);
    }
    catch(err) {}
  };

  const extender = extModule && extModule[fn_name] && extModule[fn_name].toString();
  const objText = extender && extender.substring(extender.indexOf('{') + 1, extender.lastIndexOf('}') - 1);

  const substitute = extModule && extModule.substitute && extModule.substitute.toString();
  const substituteText = substitute && substitute.substring(substitute.indexOf('{') + 3, substitute.lastIndexOf('}'));

  const managerName = `${fn_name}Manager`;
  const managerText = extModule && extModule[managerName] && extModule[managerName].toString();

  if(jsdoc) {
    text += '\n* @class\n* @extends external:' + proto;
    text += '\n*/\n';
  }
  text += `class ${fn_name} extends ${proto}{\n`;

  // если описан конструктор объекта, используем его
  if(objText && extModule[fn_name]._replace){
    text += objText;
  }
  else {
    // реквизиты по метаданным
    if (meta.fields) {
      for (f in meta.fields) {
        if(category === 'cch' && f === 'type') {
          text += `get type(){const {type} = this._obj; return typeof type === 'object' ? type : {types: []}}
set type(v){this._obj.type = typeof v === 'object' ? v : {types: []}}\n`;
        }
        else {

          const mf = f === 'clr' && meta.fields[f];
          if(mf && mf.type.str_len === 72 && !mf.type.types.includes('cat.color_price_groups')) {
            text += `get ${f}(){return $p.cat.clrs.getter(this._obj.clr)}\n`;
          }
          else {
            text += `get ${f}(){return this._getter('${f}')}\n`;
          }

          if(!meta.read_only) {
            text += `set ${f}(v){this._setter('${f}',v)}\n`;
          }
        }
      }
    }
    else {
      for (f in meta.dimensions) {
        text += `get ${f}(){return this._getter('${f}')}\nset ${f}(v){this._setter('${f}',v)}\n`;
      }
      for (f in meta.resources) {
        text += `get ${f}(){return this._getter('${f}')}\nset ${f}(v){this._setter('${f}',v)}\n`;
      }
      for (f in meta.attributes) {
        text += `get ${f}(){return this._getter('${f}')}\nset ${f}(v){this._setter('${f}',v)}\n`;
      }
    }

    // табличные части по метаданным - устанавливаем геттер и сеттер для табличной части
    for (const ts in meta.tabular_sections) {
      text += `get ${ts}(){return this._getter_ts('${ts}')}\nset ${ts}(v){this._setter_ts('${ts}',v)}\n`;
    }

    if(objText){
      text += objText;
    }
  }

  text += `}\n`;
  text += `$p.${fn_name} = ${fn_name};\n`;


  // табличные части по метаданным
  for (const ts in meta.tabular_sections) {

    // создаём конструктор строки табчасти
    const row_fn_name = DataManager.prototype.obj_constructor.call({class_name: category + '.' + name, constructor_names: {}}, ts);
    if(custom_constructor.includes(row_fn_name)) {
      continue;
    }

    text += `class ${row_fn_name} extends TabularSectionRow{\n`;

    // в прототипе строки табчасти создаём свойства в соответствии с полями табчасти
    for (const rf in meta.tabular_sections[ts].fields) {
      const mf = rf === 'clr' && meta.tabular_sections[ts].fields[rf];
      if(mf && mf.type.str_len === 72 && !mf.type.types.includes('cat.color_price_groups')) {
        text += `get ${rf}(){return $p.cat.clrs.getter(this._obj.clr)}`;
      }
      else {
        text += `get ${rf}(){return this._getter('${rf}')}`;
      }
      text += `\nset ${rf}(v){this._setter('${rf}',v)}\n`;
    }

    text += `}\n`;
    text += `$p.${row_fn_name} = ${row_fn_name};\n`;

  }

  // если описан расширитель менеджера, дополняем
  if(jsdoc) {
    text += `\n/**\n* ${$p.msg.meta_mgrs[category]} _${meta.name}_`;
    text += '\n* @class\n* @extends external:' + mgr;
    text += '\n*/\n';
  }
  if(managerText){
    text += managerText.replace('extends Object', `extends ${mgr}`);
    text += `\n$p.${category}.create('${name}', ${managerName}, ${extModule[managerName]._freeze ? 'true' : 'false'});\n`;
  }
  else{
    text += `$p.${category}.create('${name}');\n`;
  }

  return text;

}
