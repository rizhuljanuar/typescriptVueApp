enum GENDER {
  MALE,
  FEMALE
}

interface Intivee {
  id: number;
  name: string;
  gender: GENDER;
}

export {GENDER, type Intivee}
