// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  const dst = {};
  const params = url.split("?")[1].split("&");
  for (let i = 0; i < params.length; i++) {
    const splited = params[i].split("=");
    if (splited.length !== 2) {
      console.log("error");
      continue;
    }
    const [key, value] = splited;
    if (key && value) dst[key] = value;
  }
  return dst;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
