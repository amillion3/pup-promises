const dom = require('./dom');

// let pups = [];

const firstPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/pup1.json')
      .done((data) => {
        resolve(data.pup1);
      })
      .fail((err) => {
        reject('Oi, got an error!', err);
      });
  });
};

const secondPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/pup2.json')
      .done((data) => {
        resolve(data.pup2);
      })
      .fail((err) => {
        reject('Oi, got an error!', err);
      });
  });
};

const thirdPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/pup3.json')
      .done((data) => {
        resolve(data.pup3);
      })
      .fail((err) => {
        reject('Oi, got an error!', err);
      });
  });
};

// const getAllPups = () => {
//   let dogos = [];
//   return firstPupJSON()
//     .then((result) => {
//       dogos = [...result,];
//       return secondPupJSON();
//     })
//     .then((result2) => {
//       dogos = [...dogos, ...result2,];
//       return thirdPupJSON();
//     })
//     .then((result3) => {
//       dogos = [...dogos, ...result3,];
//       return Promise.resolve(dogos);
//     })
//     .catch((errorMsg) => {
//       console.error(errorMsg);
//     });
// };

const getAllPups = () => {
  return Promise.all([firstPupJSON(), secondPupJSON(), thirdPupJSON(),])
    .then((results) => {
      const dogos = [...results[0], ...results[1], ...results[2],];
      return Promise.resolve(dogos); // a Promise that is immediately resolved
    })
    .catch((error) => {
      console.error(error);
    });
};

const singlePup = () => {
  getAllPups.then((pups) => {
    const foodId = pups[0].favFoodId;
    console.error(foodId);
  });
};

const initializer = () => {
  getAllPups().then((dogos) => {
    dom.domString(dogos);
  });

};

module.exports = {
  initializer,
  singlePup,
};
