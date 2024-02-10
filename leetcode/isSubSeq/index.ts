function isSubsequence(s: string, t: string): boolean {
  let s_pointer: number = 0;
  let t_pointer: number = 0;

  while (s_pointer < s.length && t_pointer < t.length) {
    if (s[s_pointer] === t[t_pointer]) {
      s_pointer += 1;
    }
    t_pointer += 1;
  }

  return s_pointer === s.length;
}

const s: string = "cba";
const t: string = "adbecf";

console.log(isSubsequence(s, t));
