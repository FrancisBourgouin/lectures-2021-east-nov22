const child = (name, action) => {
  console.log("wassup " + name);
  action(name + name + name);
};

module.exports = child;
