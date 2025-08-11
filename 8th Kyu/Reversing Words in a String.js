function reverse(string) {
  if (string.length === 0) {
    return string;
  } else {
    return string.split(" ").reverse().join(" ");
  }
}
