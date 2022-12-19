function newMessage(topicName) {
  // Write your code here
  const paras = document.querySelectorAll("p");
  console.log(paras);
  paras.forEach((para) => {
    if (para.attributes[0]["data-topic-name"][nodeValue] === topicName) {
      para.style = "background-color: red";
    }
  });
}

// Example case
document.body.innerHTML = `<div>
      <p data-topic-name="discussion">General discussion</p>
      <p data-topic-name="bugs">Bugs</p>
      <p data-topic-name="animals">Animals</p>
    </div>`;
newMessage("discussion");
console.log(document.body.innerHTML);
