type details = string | number;

let personDetails: Record<details, number>;

personDetails = {
  name: 9090,
  age: 12,
  id: 121,
  12: 909,
};

//This will not restrict the structure of the object but this will define what type should be
//given for keys and values

//example 2

type namesAccepted = "Mike" | "Tom";

let MikeDetails: Record<namesAccepted, number>;

MikeDetails = {
  Mike: 12,
  Tom: 33,
};
