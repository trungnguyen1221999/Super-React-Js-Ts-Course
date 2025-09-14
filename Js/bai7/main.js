const promise = () =>
  new Promise((resolve, reject) => {
    const muonSach = true;
    if (muonSach) {
      resolve("Muon sach thanh cong");
    } else {
      reject("Muon sach that bai");
    }
  });

console.log(promise());

promise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
