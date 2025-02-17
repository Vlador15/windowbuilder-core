
/**
 * Абстрактное заполнение
 *
 * Общие свойства заполнения и контура
 *
 * @class
 * @extends BuilderElement
 *
 */
const AbstractFilling = (superclass) => class extends superclass {

  /**
   * Тест положения контура в изделии
   * @param pos {EnmElm_positions}
   * @memberOf AbstractFilling
   * @instance
   * @return {Boolean}
   */
  is_pos(pos) {
    // если в изделии один контур или если контур является створкой, он занимает одновременно все положения
    if(this.project.contours.count == 1 || this.parent){
      return true;
    }

    // если контур реально верхний или правый и т.д. - возвращаем результат сразу
    let res = Math.abs(this.bounds[pos] - this.project.bounds[pos]) < consts.sticking_l;

    if(!res){
      let rect;
      if(pos == "top"){
        rect = new paper.Rectangle(this.bounds.topLeft, this.bounds.topRight.add([0, -200]));
      }
      else if(pos == "left"){
        rect = new paper.Rectangle(this.bounds.topLeft, this.bounds.bottomLeft.add([-200, 0]));
      }
      else if(pos == "right"){
        rect = new paper.Rectangle(this.bounds.topRight, this.bounds.bottomRight.add([200, 0]));
      }
      else if(pos == "bottom"){
        rect = new paper.Rectangle(this.bounds.bottomLeft, this.bounds.bottomRight.add([0, 200]));
      }

      res = !this.project.contours.some((l) => {
        return l != this && rect.intersects(l.bounds);
      });
    }

    return res;
  }

  /**
   * Возвращает структуру профилей по сторонам
   * @memberOf AbstractFilling
   * @instance
   * @param side
   * @param profiles
   * @return {Object}
   */
  profiles_by_side(side, profiles) {
    // получаем таблицу расстояний профилей от рёбер габаритов
    if(!profiles){
      profiles = this.profiles;
    }
    const bounds = {
      left: Infinity,
      top: Infinity,
      bottom: -Infinity,
      right: -Infinity
    };
    const res = {};
    const ares = [];

    function by_side(name) {
      ares.some((elm) => {
        if(elm[name] == bounds[name]){
          res[name] = elm.profile;
          return true;
        }
      })
    };

    if (profiles.length) {
      profiles.forEach((profile) => {
        const {b, e} = profile;
        const x = b.x + e.x;
        const y = b.y + e.y;
        if(x < bounds.left){
          bounds.left = x;
        }
        if(x > bounds.right){
          bounds.right = x;
        }
        if(y < bounds.top){
          bounds.top = y;
        }
        if(y > bounds.bottom){
          bounds.bottom = y;
        }
        ares.push({
          profile: profile,
          left: x,
          top: y,
          bottom: y,
          right: x
        });
      });
      if (side) {
        by_side(side);
        return res[side];
      }

      Object.keys(bounds).forEach(by_side);
    }

    return res;
  }

  /**
   * Возвращает массив вложенных контуров текущего контура
   * @memberOf AbstractFilling
   * @instance
   * @type Array.<Contour>
   */
  get contours() {
    return this.children.filter((elm) => elm instanceof Contour);
  }

  get skeleton() {
    return this._skeleton;
  }

  /**
   * Cлужебная группа размерных линий
   * @memberOf AbstractFilling
   * @instance
   * @type DimensionDrawer
   */
  get l_dimensions() {
    const {_attr} = this;
    return _attr._dimlns || (_attr._dimlns = new DimensionDrawer({parent: this}));
  }

  /**
   * Габариты с учетом пользовательских размерных линий, чтобы рассчитать отступы автолиний
   * @memberOf AbstractFilling
   * @instance
   * @type paper.Rectangle
   */
  get dimension_bounds() {
    let {bounds} = this;
    this.getItems({class: DimensionLineCustom}).forEach((dl) => {
      bounds = bounds.unite(dl.bounds);
    });
    return bounds;
  }

};

EditorInvisible.AbstractFilling = AbstractFilling;
