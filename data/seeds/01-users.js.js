const bcrypt = require('bcryptjs')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').delete()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Vader', password: bcrypt.hashSync('deathstar', 10) , email:'darth@deathstar.com', phone_number: 123456789},
        {id: 2, username:'Leia', password: bcrypt.hashSync('alderaan', 10), email:'leia@alderaan.com', phone_number: 198765431},
        {id: 3, username:'Skywalker', password: bcrypt.hashSync('tatooine', 10), email: 'luke@tatooine.com', phone_number: 15612378},
        {id: 4, username:'Obi', password: bcrypt.hashSync('stewjon', 10), email: 'obi@stewjon.com', phone_number: 146879213},
        {id: 5, username:'ChewBacca', password: bcrypt.hashSync('kashyyk'), email:'chewy@kashyyk.com', phone_number: 156789524},
        {id: 6, username:'Yoda', password: bcrypt.hashSync('master'), email: 'yoda@master.com', phone_number: 148455658},
        {id: 7, username:'Solo', password: bcrypt.hashSync('corellia'), email:'solo@corellia.com', phone_number: 154564564}
      ]);
    });
};

// id: 1
// Username: Vader
// Password: deathstar
// Email: darth@deathstar.com
// Phone_Number: 1234567891

// id: 2
// Username: Leia
// Password: alderaan
// Email: leia@alderaan.com
// Phone_Number: 1987654321

// id: 3
// Username: Skywalker
// Password: tatooine
// Email: luke@tatooine.com
// Phone_Number: 4561237892

// id: 4
// Username: Obi
// Password: stewjon
// Email: obi@stewjon.com
// Phone_Number: 5468792133

// id: 5
// Username: ChewBacca
// Password: kashyyk
// Email: chewy@kashyyk.com
// Phone_Number: 4567895242

// id: 6
// Username: Yoda
// Password: master
// Email: yoda@master.com
// Phone_Number: 2484556584

// id: 7
// Username: Solo
// Password: corellia
// Email: solo@corellia.com
// Phone_Number: 6545645645