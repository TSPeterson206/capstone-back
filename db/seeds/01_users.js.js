exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {id: 1, username: 'toby', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'If not forward then backward, so make it forward', profilepic:'https://tobypeterson.surge.sh/Toby_Peterson.png'},
        {id: 2, username: 'erin', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is erins tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 3, username: 'hannah', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is hannahs tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 4, username: 'allison', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is allisons tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 5, username: 'lael', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is laels tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 6, username: 'molly', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is mollys tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 7, username: 'sarah', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is sarahs tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 8, username: 'dan', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is dans tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 9, username: 'emily', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is emily tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'},
        {id: 10, username: 'brad', password:'$2a$10$DpZ6lGglZwXC4IfEwoCT1OO7VfGCvOFJ1T9UeTt4lhi2U5LeqGdyK', tagline:'this is brad tagline', profilepic:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    })
}
