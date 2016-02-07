

	function human(){
		this.name = 'name';
		this.age = 'age';
		this.sex = 'sex';
		this.weight = 'weight';
		this.height = 'height';
		this.confession = 'confession';
	}

	function worker(){
		this.company = 'Tranio';
		this.salary = 20000;
		this.to_work = function(){
			return 'goes to work';
		};
	}

	function student(){
		this.univercity = 'BGU';
		this.scholarship = 100;
		this.serials = function(){
			return 'shows films';
		};
	}

	var newHuman = new human();

	student.prototype = newHuman;
	var newStudent = new student();
		newStudent.name = 'Pit';
		newStudent.age = 19;
		newStudent.sex = 'male';
		newStudent.height = 180;
		newStudent.weight = 82;

	worker.prototype = newHuman;
	var newWorker = new worker();
		newWorker.name = 'Dmitro';
		newWorker.age = 36;
		newWorker.sex = 'male';
		newWorker.height = 175;
		newWorker.weight = 80;

		console.log('Worker:', newWorker.name,
					'age:', newWorker.age,
					'sex:', newWorker.sex,
					'height:', newWorker.height,
					'weight:', newWorker.weight
		);
		console.log(newWorker.name, newWorker.to_work(), 'everyday');


		console.log('Student:', newStudent.name,
					'age:', newStudent.age,
					'sex:', newStudent.sex,
					'height:', newStudent.height,
					'weight:', newStudent.weight
		);
		console.log(newStudent.name, newStudent.serials(), 'every weekend');