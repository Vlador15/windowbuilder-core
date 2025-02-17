
/**
 * Элемент c образующей
 * Виртуальный класс элементов построителя, у которго есть образующая
 *
 * @abstract
 * @extends BuilderElement
 * @tutorial profile
 */
class GeneratrixElement extends BuilderElement {

  constructor(attr = {}) {
    const {generatrix} = attr;
    if (generatrix) {
      delete attr.generatrix;
    }
    super(attr);
    if (generatrix) {
      attr.generatrix = generatrix;
    }
    this.initialize(attr);
  }

  /**
   * Координаты начала элемента
   * @type paper.Point
   */
  get b() {
    const {generatrix} = this._attr;
    return generatrix && generatrix.firstSegment.point;
  }
  set b(v) {
    const {_rays, generatrix} = this._attr;
    _rays.clear();
    if(generatrix) generatrix.firstSegment.point = v;
  }

  /**
   * Координаты конца элемента
   * @type paper.Point
   */
  get e() {
    const {generatrix} = this._attr;
    return generatrix && generatrix.lastSegment.point;
  }
  set e(v) {
    const {_rays, generatrix} = this._attr;
    _rays.clear();
    if(generatrix) generatrix.lastSegment.point = v;
  }

  /**
   * Координата x начала профиля
   * @type Number
   */
  get x1() {
    const {bounds} = this.project;
    return bounds ? (this.b.x - bounds.x).round(1) : 0;
  }
  set x1(v) {
    const {bounds} = this.project;
    if(bounds && (v = parseFloat(v) + bounds.x - this.b.x)) {
      this.select_node('b');
      this.move_points(new paper.Point(v, 0));
    }
  }

  /**
   * Координата y начала профиля
   * @type Number
   */
  get y1() {
    const {bounds} = this.project;
    return bounds ? (bounds.height + bounds.y - this.b.y).round(1) : 0;
  }
  set y1(v) {
    const {bounds} = this.project;
    if(bounds && (v = bounds.height + bounds.y - parseFloat(v) - this.b.y)) {
      this.select_node('b');
      this.move_points(new paper.Point(0, v));
    }
  }

  /**
   * Координата x конца профиля
   * @type Number
   */
  get x2() {
    const {bounds} = this.project;
    return bounds ? (this.e.x - bounds.x).round(1) : 0;
  }
  set x2(v) {
    const {bounds} = this.project;
    if(bounds && (v = parseFloat(v) + bounds.x - this.e.x)) {
      this.select_node('e');
      this.move_points(new paper.Point(v, 0));
    }
  }

  /**
   * Координата y конца профиля
   * @type Number
   */
  get y2() {
    const {bounds} = this.project;
    return bounds ? (bounds.height + bounds.y - this.e.y).round(1) : 0;
  }
  set y2(v) {
    const {bounds} = this.project;
    if(bounds && (v = bounds.height + bounds.y - parseFloat(v) - this.e.y)) {
      this.select_node('e');
      this.move_points(new paper.Point(0, v));
    }
  }

  /**
   * Выделяет начало или конец профиля
   *
   * @param node {String} b, e - начало или конец элемента
   */
  select_node(node) {
    const {generatrix, project, _attr, view} = this;
    project.deselect_all_points();
    if(_attr.path) {
      _attr.path.selected = false;
    }
    if(node == 'b') {
      generatrix.firstSegment.selected = true;
    }
    else {
      generatrix.lastSegment.selected = true;
    }
    view.update();
  }

  /**
   * Двигает элемент за один такт
   * Синхронно тянет импосты и угловые соединения
   * @param delta
   */
  move_gen(delta) {

    // сразу получаем сегменты примыкающих импостов и створок
    const {isegments} = this;
    const nearests = this.joined_nearests();

    // угловые соединения b, e
    const {generatrix, rays, project} = this;
    generatrix.translate(delta);
    for(const {profile, profile_point, point} of [rays.b, rays.e]) {
      if(profile && profile_point) {
        profile.generatrix.segments.forEach((segm) => segm.selected = false);
        profile[profile_point].selected = true;
        profile.move_points(point.subtract(profile[profile_point]));
        profile[profile_point].selected = false;
      }
    }

    // ранняя привязка импостов
    rays.clear();
    isegments.forEach(({profile, node}) => {
      profile.do_sub_bind(this, node);
      profile.rays.clear();
    });

    // ранняя привязка створок
    for(const profile of nearests) {
      profile.move_gen(delta);
    }

    rays.clear();
    project.register_change();
  }

  /**
   * Двигает узлы
   * Обрабатывает смещение выделенных сегментов образующей профиля
   *
   * @param delta {paper.Point} - куда и насколько смещать
   * @param [all_points] {Boolean} - указывает двигать все сегменты пути, а не только выделенные
   * @param [start_point] {paper.Point} - откуда началось движение
   */
  move_points(delta, all_points, start_point) {

    if(!delta.length){
      return;
    }

    const	other = [];
    const noti = {type: consts.move_points, profiles: [this], points: []};

    let changed;

    // если не выделено ни одного сегмента, двигаем все сегменты
    if(!all_points){
      all_points = !this.generatrix.segments.some((segm) => {
        if (segm.selected)
          return true;
      });
    }

    // сразу получаем сегменты примыкающих импостов
    const {isegments} = this;

    this.generatrix.segments.forEach((segm) => {

      let cnn_point;

      if (segm.selected || all_points){

        const noti_points = {old: segm.point.clone(), delta: delta};

        // собственно, сдвиг узлов
        const free_point = segm.point.add(delta);

        if(segm.point == this.b){
          cnn_point = this.rays.b;
          if(!cnn_point.profile_point || paper.Key.isDown('control')) {
            cnn_point = this.cnn_point('b', free_point);
          }
        }
        else if(segm.point == this.e){
          cnn_point = this.rays.e;
          if(!cnn_point.profile_point || paper.Key.isDown('control')){
            cnn_point = this.cnn_point('e', free_point);
          }
        }

        let {profile, profile_point} = cnn_point || {};

        if(cnn_point && cnn_point.cnn_types == $p.enm.cnn_types.acn.t && (segm.point == this.b || segm.point == this.e)){
          if(cnn_point.point.is_nearest(free_point, 0)){
            segm.point = cnn_point.point;
          }
          else{
            // при сдвигах примыканий к наклонным элементам, ищем точку на луче
            const ppath = (profile.nearest(true) ? profile.rays.outer : profile.generatrix).clone({insert: false});
            const {bounds} = ppath;
            if(Math.abs(delta.y) < consts.epsilon){
              // режем вертикальным лучом
              const ray = new paper.Path({
                insert: false,
                segments: [[free_point.x, bounds.top - 100], [free_point.x, bounds.bottom + 100]]
              });
              segm.point = ppath.intersect_point(ray, free_point, true) || free_point;
            }
            else if(Math.abs(delta.x) < consts.epsilon){
              // режем горизонтальным лучом
              const ray = new paper.Path({
                insert: false,
                segments: [[bounds.left - 100, free_point.y], [bounds.right + 100, free_point.y]]
              });
              segm.point = ppath.intersect_point(ray, free_point, true) || free_point;
            }
            else {
              segm.point = free_point;
            }
          }
        }
        else{
          segm.point = free_point;
          // если соединение угловое, тянем тянем соседние узлы сразу
          if(cnn_point && !paper.Key.isDown('control')){

            if(profile && profile_point && !profile[profile_point].is_nearest(free_point)){
              if(this instanceof Onlay){
                this.move_nodes(noti_points.old, free_point);
              }
              else{
                other.push(profile_point == 'b' ? profile.generatrix.firstSegment : profile.generatrix.lastSegment);
                noti.profiles.push(profile);
                // если разрыв, тянем третий профиль
                if(cnn_point.is_cut) {
                  this.layer.profiles.some((p) => {
                    if(p !== profile && p !== this) {
                      if(profile[profile_point].is_nearest(p.b)) {
                        p.b = free_point;
                        other.push(p.generatrix.firstSegment);
                        noti.profiles.push(p);
                        return true;
                      }
                      else if(profile[profile_point].is_nearest(p.e)) {
                        p.e = free_point;
                        other.push(p.generatrix.lastSegment);
                        noti.profiles.push(p);
                        return true;
                      }
                    }
                  });
                }
                profile[profile_point] = free_point;
              }
            }
          }
        }

        // накапливаем точки в нотификаторе
        noti_points.new = segm.point;
        if(start_point){
          noti_points.start = start_point;
        }
        noti.points.push(noti_points);

        changed = true;
      }

    });


    // информируем систему об изменениях
    if(changed){
      const {_attr: {_rays}, layer, project} = this;

      // ранняя привязка импостов
      _rays.clear();
      if(isegments.length) {
        isegments.forEach(({profile, node}) => {
          profile.do_sub_bind(this, node);
          profile.rays.clear();
          other.push(profile.generatrix[node === 'b' ? 'firstSegment' : 'lastSegment']);
          !noti.profiles.includes(profile) && noti.profiles.push(profile);
        });
        _rays.clear();
      }

      layer?.notify?.(noti);
      project.notify(this, 'update', {x1: true, x2: true, y1: true, y2: true});
    }

    return other;
  }

  /**
   * Сегменты примыкающих импостов
   * @return {Array}
   */
  get isegments() {
    const imposts = this.joined_imposts ? this.joined_imposts() : {inner: [], outer: []};
    const segments = [];
    imposts.inner.concat(imposts.outer).forEach(({profile}) => {
      const {b, e} = profile.rays;
      if(b.profile === this) {
        segments.push({profile, node: 'b'});
      }
      if(e.profile === this) {
        segments.push({profile, node: 'e'});
      }
    }); 
    return segments;
  }
  
  /**
   * Вспомогательная функция do_bind, привязка импостов
   * @param profile {ProfileItem} - к которому примыкает текущий импост
   * @param node {String} - b,e
   * @return {boolean|Point|undefined}
   */
  do_sub_bind(profile, node) {
    const ppath = (profile.nearest(true) ? profile.rays.outer : profile.generatrix).clone({insert: false});
    let mpoint = ppath.getNearestPoint(this[node]);
    if(!mpoint.is_nearest(this[node], 0)) {
      const gen = this.generatrix.clone({insert: false}).elongation(3000);
      mpoint = ppath.intersect_point(gen, mpoint, true);
      this[node] = mpoint;
      return true;
    }
  }

  get carcass() {
    return this.skeleton.carcass;
  }

  set carcass(v) {
    const {generatrix, path} = this;
    if(v) {
      generatrix.strokeWidth = 5;
      path.clear();
    }
    else {
      generatrix.strokeWidth = 1;
    }
  }
}

EditorInvisible.GeneratrixElement = GeneratrixElement;
