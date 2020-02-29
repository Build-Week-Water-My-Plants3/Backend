  
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { id: 1, user_id: 1, nickname: 'Darth', species: 'Picasa', water_schedule: '2020-01-31 14:00', frequency: 1, last_watered: '2020-03-1', image_url: 'https://i.pinimg.com/originals/7f/4a/61/7f4a611c822ddaa9d9759c045f203b81.jpg' },
        { id: 2, user_id: 1, nickname: 'Sith', species: 'Begonia', water_schedule: '2020-01-30 21:54', frequency: 2, last_watered: '2020-03-1', image_url: 'https://cdn.paizo.com/image/content/PathfinderRPG/PZO1140-Flytrap.jpg' },
        { id: 3, user_id: 2, nickname: 'Polis', species: 'Iris', water_schedule: '2020-01-31 14:00', frequency: 2, last_watered: '2020-03-1', image_url: 'https://i.pinimg.com/originals/85/70/3f/85703fc131f8187760c60fea4d80b1aa.jpg' },
        { id: 4, user_id: 2, nickname: 'Massa', species: 'Dahlia', water_schedule: '2020-02-01 13:53', frequency: 3, last_watered: '2020-03-1', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGlJUyQP0lTzU8AC9lgXmO-ZVSW-J4NgEPEFkH1gh9wp7s2yak' },
        { id: 5, user_id: 3, nickname: 'Shmi', species: 'Eucomis', water_schedule: '2020-01-31 14:00', frequency: 1, last_watered: '2020-03-1', image_url: 'https://i.pinimg.com/originals/90/ca/5c/90ca5c8d735d1d9a5b70559c43e7f211.jpg' },
        { id: 6, user_id: 3, nickname: 'Lars', species: 'Dinkum', water_schedule: '2020-02-02 17:31', frequency: 1, last_watered: '2020-03-1', image_url: 'https://i.pinimg.com/564x/43/7c/e6/437ce6a672dd0cec09006a62871e26d0.jpg' },
        { id: 7, user_id: 3, nickname: 'Sky', species: 'Featherfern', water_schedule: '2020-02-04 18:12', frequency: 10, last_watered:'2020-03-1', image_url: 'https://i.pinimg.com/originals/db/91/49/db91490828a9352b567ee68a648ebcb0.png' },
        { id: 8, user_id: 4, nickname: 'Stewjon', species: 'Kalpi', water_schedule: '2020-01-31 14:00', frequency: 7, last_watered: '2020-03-1', image_url: 'https://i.pinimg.com/564x/36/c1/95/36c1953761a76f35be99c2a185ec276f.jpg' },
        { id: 9, user_id: 4, nickname: 'Galactic', species: 'Royal Fluzz', water_schedule: '2020-02-04 09:21', frequency: 5, last_watered: '2020-03-1', image_url: 'https://i.pinimg.com/564x/b5/74/15/b574154042f6db516376d8d95df4496e.jpg' },
        { id: 10, user_id: 5, nickname: 'Millennium', species: 'Mushbloom', water_schedule: '2020-01-31 14:00', frequency: 1, last_watered:'2020-03-1', image_url: 'https://cdn.staticneo.com/ca/pandoras_tower_conceptart_d7Btx.jpg' },
        { id: 11, user_id: 5, nickname: 'Falcon', species: 'Bonshyyyr', water_schedule: '2020-01-25 08:28', frequency: 2, last_watered:'2020-03-1', image_url: 'https://cdn.staticneo.com/ca/pandoras_tower_conceptart_A1n2O.jpg' },
        { id: 12, user_id: 5, nickname: 'Force', species: 'Dreamwort', water_schedule: '2020-01-21 19:26', frequency: 2, last_watered:'2020-03-1', image_url: 'https://cdn.staticneo.com/ca/pandoras_tower_conceptart_YRYnW.jpg' },
        { id: 13, user_id: 5, nickname: 'Star', species: 'Gillypod', water_schedule: '2020-01-19 16:42', frequency: 1, last_watered:'2020-03-1', image_url: 'https://cdn.staticneo.com/ca/pandoras_tower_conceptart_1qJM8.jpg' }
      ])
    })
}

// user_id: 1
// Username: Vader
// Password: deathstar
// Email: darth@deathstar.com
// Phone_Number: 1234567891

// user_id: 2
// Username: Leia
// Password: alderaan
// Email: leia@alderaan.com
// Phone_Number: 1987654321

// user_id: 3
// Username: Skywalker
// Password: tatooine
// Email: luke@tatooine.com
// Phone_Number: 4561237892

// user_id: 4
// Username: Obi
// Password: stewjon
// Email: obi@stewjon.com
// Phone_Number: 5468792133

// user_id: 5
// Username: ChewBacca
// Password: kashyyk
// Email: chewy@kashyyk.com
// Phone_Number: 4567895242

// user_id: 6
// Username: Yoda
// Password: master
// Email: yoda@master.com
// Phone_Number: 2484556584

// user_id: 7
// Username: Solo
// Password: corellia
// Email: solo@corellia.com
// Phone_Number: 6545645645