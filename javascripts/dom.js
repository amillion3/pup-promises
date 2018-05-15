const outputDiv = $('#pups');

const printToDom = input => {
  outputDiv.append(input);
};

const domString = pups => {
  pups.forEach((pup) => {
    let domString = '';
    domString += `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">${pup.name}</h3>
      </div>
      <div class="panel-body">
      ${pup.bio}
      </div>
    </div>`;
    printToDom(domString);
  });
};

module.exports = {
  domString,
};
