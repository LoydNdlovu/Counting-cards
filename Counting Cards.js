function combinations(cards) {
  const n = 52;

  // Helper function for factorial
  function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    return result;
  }

  // Combination formula: n! / (k! * (n - k)!)
  return factorial(n) / (factorial(cards) * factorial(n - cards));
}