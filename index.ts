var unused = true;

export function CAUSEFLOATINGERROR() {
  new Promise(() => {
    throw "oh no";
  });

  return new Array();
}
