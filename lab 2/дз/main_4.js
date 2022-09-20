let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
    };
    
    console.log(Object.keys(student));
    //Студент Имя Фамилия учится в номер группе
    console.log("Студент " + student["first_name"] + " " + student["last_name"] + " учится в " + student["group"] + " группе");
