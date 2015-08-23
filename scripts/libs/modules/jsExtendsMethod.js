define(function(){
	//工厂模式
	function factory(){
		console.log('工厂模式');
		function createperson(name,age,job){
			var o = new Object();
			o.name = name;
			o.age = age;
			o.job = job;
			return o;
		}
		var nicholas = createperson('nicholas',25,'software engineer');
		console.log(nicholas);
	};

	//构造函数模式
	function construct(){
		console.log('构造函数模式');
		function Person(name,age,job){
			this.name = name;
			this.age = age;
			this.job = job;
			this.sayName = function(){
				console.log(this.name);
			};
		}
		var nicholas = new Person('nicholas',25,'software engineer');
		console.log(nicholas);
		nicholas.sayName();
	};


	//原型模式
	function prototype(){
		console.log('原型模式');
		function PersonPrototype(){
		};
		PersonPrototype.prototype.name= 'nicholas';
		PersonPrototype.prototype.age = 25;
		PersonPrototype.prototype.job = 'software engineer';
		PersonPrototype.prototype.sayName = function(){
			console.log(this.name);
		}
		var person1 = new PersonPrototype();
		person1.sayName();
	};


	//组合使用构造函数模式和原型模式
	function constructAndPrototype(){
		console.log('组合使用构造函数模式和原型模式');
		function Person(name,age,job){
			this.name = name;
			this.age = age;
			this.job = job;
			this.friends = ['shelby','Court'];
		}
		Person.prototype.sayName = function(){
			console.log(this.name);
		}
		var person1 = new Person('nicholas',25,'software engineer');
		var person2 = new Person('Greg',23,'Doctor');

		person1.friends.push('Van');
		console.log(person1.friends);
		console.log(person2.friends);
		console.log(person1.friends === person2.frineds);//false
		console.log(person1.sayName === person2.sayName);//true
	};

	//动态原型模式
	function dynamicPrototype(){
		console.log('动态原型模式');
		function Person(name, age, job){
			//属性
			this.name = name;
			this.age = age;
			this.job = job;
			//方法
			if(typeof this.sayName != 'funciton'){
				Person.prototype.sayName = function(){
					console.log(this.name);
				}
			}
		}
		var person = new Person('nicholas',25,'software engineer');
		person.sayName();
	};

	//寄生构造函数模式
	function parasiteConstruct(){
		console.log('寄生构造函数模式');
		function SpecialArray(){
			var o = new Array();

			o.push.apply(o,arguments);

			o.toPipedString = function(){
				return this.join('|');
			};

			return o;
		}
		var colors = new SpecialArray('red','blue','green');
		console.log(colors.toPipedString());
	};

	//稳妥构造函数模式
	function safeConstruct(){
		console.log('稳妥构造函数模式');
		function Person(name, age, job){
			var o = new Object();
			o.sayName = function(){
				console.log(name);
			}
			return o;
		}
		var person = new Person('nicholas',23,'software engineer');
		person.sayName();
	};

	function run(){
		factory();
		construct();
		prototype();
		constructAndPrototype();
		parasiteConstruct();
		safeConstruct();
	}

	return {
		run:run
	}
});
