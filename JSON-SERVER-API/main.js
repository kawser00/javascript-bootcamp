const tableBody = document.querySelector('table tbody');

//data fetch from local Server
fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(user => {
      const {id, name, username, email} = user;
      let userInfo = `
        <tr>
          <th scope="row">${id}</th>
          <td>${name}</td>
          <td>${username}</td>
          <td>${email}</td>
        </tr>
      `
      tableBody.insertAdjacentHTML('beforeend', userInfo);
    })
  })