function solution(n) {
  var answer = 0;
  let result = 0;
  let temp = 0;

  for (let a = 1; a < n - 1; a++) {
    temp = a;
    while (temp < n) {
      result += temp;

      if (result == n) {
        answer++;
        result = 0;
        break;
      } else if (result > n) {
        result = 0;
        break;
      }
      temp++;
    }
  }

  answer += 1;
  return answer;
}
