const getBtn = document.getElementById('get-btn');
    const postBtn = document.getElementById('post-btn');

    const getData = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET','http://localhost:3000/produtos');
      xhr.onload = () => {
        console.log(xhr.response);
      }
      xhr.send();
    };

    const sendData = () => {};

    getBtn.addEventListener('click', getData);
    postBtn.addEventListener('click', sendData);
    window.addEventListener("load",output,false);