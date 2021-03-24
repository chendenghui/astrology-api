const cpy = require("cpy");

(async () => {
  await cpy(["./eph/*.*"], "dist/eph");
  console.log("Files copied!");
})();
