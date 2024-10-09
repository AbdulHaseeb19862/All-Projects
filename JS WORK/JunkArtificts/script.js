const container = document.getElementById("container");
const children = container.childNodes;

const junkArtifacts = [];
const elements = [];

for (var i = 0; i < children.length; i++) {
  if (children[i].nodeType !== 1) {
    junkArtifacts.push(children[i]);
  } else {
    elements.push(children[i]);
  }
}

console.table([children, junkArtifacts, elements]);
