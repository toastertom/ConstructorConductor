//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  function Person(name, age){
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  var person1 = new Person('Bill', 22);
  var person2 = new Person('Tommy', 19);
  var person3 = new Person('Susan', 78);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  function sayName(person){
    console.log(person.name);
  }
sayName(person1);
