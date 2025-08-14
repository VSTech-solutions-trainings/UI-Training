//we can define pre-defined constant values

enum Roles {
  Admin, //0
  Staff, //1
  Student, //2
}

let personRole: Roles;

personRole = Roles.Admin;

console.log("old", personRole); //0

//example 2

enum NewRoles {
  Admin = "Admin", //0
  Staff = "Staff", //1
  Student = "Student", //2
}

let personNewRole: NewRoles = NewRoles.Admin;

console.log("new", personNewRole);
