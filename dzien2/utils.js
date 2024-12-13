// jezeli uzywamy slowa export, to musimy zaimportowac z klamrami {} i uzyc dokladnie takiej samej nazwy
export const sum = (a, b) => {
  return a + b;
}

export const diff = (a, b) => {
  return a - b;
}
// export default moze byc tylko jeden
// mozemy to zaimportowac pod dowolna nazwa
export default function helloWorld() {
  console.log('hello world')
}