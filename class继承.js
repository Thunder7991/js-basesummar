class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
 static running() {
    console.log(this.name + 'running!');
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name,age);
  }
  studying() {
    console.log(super.running());
  }
  static running() {
    super.running()
    //do something
  }
 
}

let stu = new Student();
console.log(Student.running());



function abc() {
  this.name = 12
}

let abd = new abc()
console.log(Object.getOwnPropertyDescriptors(abc.prototype));



function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}


function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

var Student = /*#__PURE__*/ (function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age) {
    _classCallCheck(this, Student);

    return _super.call(this, name, age);
  }

  _createClass(Student, [
    {
      key: "studying",
      value: function studying() {
        console.log(
          _get(_getPrototypeOf(Student.prototype), "running", this).call(this)
        );
      }
    }
  ]);

  return Student;
})(Person);

