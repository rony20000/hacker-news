export const randomize = (list: number[], n: number) => {
    const l = list.slice()
    const arr = [];
    
    for (let i = 0; i < n; i++) {
      const random = Math.floor((l.length-i) * Math.random());
      arr.push(l[random]);
      l[random] = l[l.length - 1];
    }
    
    return arr;
}