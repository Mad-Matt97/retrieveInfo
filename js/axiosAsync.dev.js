const getUsuarios = async () => {
  // Make a request for a user with a given ID

  await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // handle success

      const formulario = document.getElementById('formulario').value;
      const usuarioId = formulario;
      if (usuarioId >= 10) {
        alert('Usuario no válido, por favor introduce un número del 0 al 9');
      }

      console.log(response.data[usuarioId]);
      const name = response.data[usuarioId].name;
      const email = response.data[usuarioId].email;
      const website = response.data[usuarioId].website;
      document.getElementById('name').innerHTML = name;
      document.getElementById('email').innerHTML = email;
      document.getElementById('website').innerHTML = website;
    })
    .catch(function (error) {
      // handle error
      console.log('Se ha producido un error:', error);
    })
    .then(function () {});
};

getUsuarios();
