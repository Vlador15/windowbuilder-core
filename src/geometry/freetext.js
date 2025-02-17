
/*
 * Created 21.08.2015
 */

/**
 * Произвольный текст на эскизе
 * @extends paper.PointText
 */
class FreeText extends paper.PointText {

  /**
   *
   * @param attr {Object} - объект с указанием на строку координат и родительского слоя
   * @param attr.parent {BuilderElement} - элемент, к которому привязывается комментарий
   */
  constructor(attr) {

    if(!attr.fontSize){
      attr.fontSize = consts.font_size;
      if(attr.parent) {
        const {width, height} = attr.parent.project.bounds;
        const {cutoff, font_size} = consts;
        const size = Math.max(width - cutoff, height - cutoff) / 60;
        attr.fontSize += (size > 0 ? size : 0).round();
      }
    }
    attr.fontFamily = consts.font_family;

    super(attr);

    if(attr.row){
      this._row = attr.row;
    }
    else{
      this._row = attr.row = this.project.ox.coordinates.add();
    }

    const {_row} = this;

    if(!_row.cnstr){
      _row.cnstr = attr.parent ? attr.parent.layer.cnstr : this.project.activeLayer.cnstr;
    }

    if(!_row.elm){
      _row.elm = this.project.ox.coordinates.aggregate([], ["elm"], "max") + 1;
    }

    if(attr.point){
      if(attr.point instanceof paper.Point)
        this.point = attr.point;
      else
        this.point = new paper.Point(attr.point);
    }
    else{

      this.clr = _row.clr;
      this.angle = _row.angle_hor;

      if(_row.path_data){
        var path_data = JSON.parse(_row.path_data);
        this.x = _row.x1 + path_data.bounds_x || 0;
        this.y = _row.y1 - path_data.bounds_y || 0;
        this._mixin(path_data, null, ["bounds_x","bounds_y"]);
      }else{
        this.x = _row.x1;
        this.y = _row.y1;
      }
    }

    this.bringToFront();

  }

  /**
   * Удаляет элемент из контура и иерархии проекта  
   * Одновлеменно, удаляет строку из табчасти табчасти _Координаты_
   */
  remove() {
    if(this._row) {
      this._row._owner.del(this._row);
      this._row = null;
    }
    paper.PointText.prototype.remove.call(this);
  }

  /**
   * Вычисляемые поля в таблице координат
   */
  save_coordinates() {
    const {_row} = this;

    _row.x1 = this.x;
    _row.y1 = this.y;
    _row.angle_hor = this.angle;

    // устанавливаем тип элемента
    _row.elm_type = this.elm_type;

    // сериализованные данные
    _row.path_data = JSON.stringify({
      text: this.text,
      font_family: this.font_family,
      font_size: this.font_size,
      bold: this.bold,
      align: this.align.ref,
      bounds_x: this.project.bounds.x,
      bounds_y: this.project.bounds.y
    });
  }

  /**
   * Перемещает элемент и информирует об этом наблюдателя
   */
  move_points(point) {
    this.point = point;
    this.project.notify(this, 'update', {x: true, y: true});
  }

  /**
   * Возвращает тип элемента (Текст)
   * @type EnmElm_types
   */
  get elm_type() {
    return $p.enm.elm_types.Текст;
  }

  // виртуальные метаданные для автоформ
  _metadata(fld) {
    return $p.dp.builder_text.metadata(fld);
  }

  // виртуальный датаменеджер для автоформ
  get _manager() {
    return $p.dp.builder_text;
  }

  // транслирует цвет из справочника в строку и обратно
  get clr() {
    return this._row ? this._row.clr : $p.cat.clrs.get();
  }
  set clr(v) {
    this._row.clr = v;
    if(this._row.clr.clr_str.length == 6)
      this.fillColor = "#" + this._row.clr.clr_str;
    this.project.register_update();
  }

  /**
   * Семейство шрифта
   * @type {String}
   */
  get font_family() {
    return this.fontFamily || "";
  }
  set font_family(v) {
    this.fontFamily = v;
    this.project.register_update();
  }

  /**
   * Размер шрифта
   * @type {Number}
   */
  get font_size() {
    return this.fontSize || consts.font_size;
  }
  set font_size(v) {
    this.fontSize = v;
    this.project.register_update();
  }

  /**
   * Жирность шрифта
   * @type {Boolean}
   */
  get bold() {
    return this.fontWeight != 'normal';
  }
  set bold(v) {
    this.fontWeight = v ? 'bold' : 'normal';
  }

  /**
   * Координата x
   * @type {Number}
   */
  get x() {
    return (this.point.x - this.project.bounds.x).round(1);
  }
  set x(v) {
    this.point.x = parseFloat(v) + this.project.bounds.x;
    this.project.register_update();
  }

  /**
   * Координата y
   * @type {Number}
   */
  get y() {
    const {bounds} = this.project;
    return (bounds.height + bounds.y - this.point.y).round(1);
  }
  set y(v) {
    const {bounds} = this.project;
    this.point.y = bounds.height + bounds.y - parseFloat(v);
  }

  /**
   * текст элемента  
   * при установке пустой строки, элемент удаляется
   * @type {String}
   */
  get text() {
    return this.content;
  }
  set text(v) {
    if(!v){
      v = ' ';
    }
    this.content = v;
    this.project.register_update();
  }

  /**
   * Угол к горизонту
   * @type {Number}
   */
  get angle() {
    return Math.round(this.rotation);
  }
  set angle(v) {
    this.rotation = v;
    this.project.register_update();
  }

  /**
   * Выравнивание текста
   * @type {EnmText_aligns}
   */
  get align() {
    return $p.enm.text_aligns.get(this.justification);
  }
  set align(v) {
    this.justification = $p.utils.is_data_obj(v) ? v.ref : v;
    this.project.register_update();
  }

}

EditorInvisible.FreeText = FreeText;

