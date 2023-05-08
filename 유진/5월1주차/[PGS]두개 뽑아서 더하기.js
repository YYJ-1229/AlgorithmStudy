function solution(numbers) {
  var answer = [];
  let temp = 0;
  for (let a = 0; a < numbers.length; a++) {
    let num = numbers.pop();

    for (let b = 0; b < numbers.length - 1; b++) {
      answer.push(num + numbers[b]);
    }
    numbers.unshift(num);
  }
  answer = new Set(answer);
  answer = [...answer];
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
