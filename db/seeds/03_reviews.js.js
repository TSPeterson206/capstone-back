exports.seed = function(knex, Promise) {
  return knex('reviews').insert([
    {id: 1, content:'Great Service! It saved my life.', rating:5, user_id:1, provider_id:1},
    {id: 2, content:'This place could use some work.', rating:2, user_id:2, provider_id:1},
    {id: 3, content:'I would go back in a heartbeat!', rating:4, user_id:3, provider_id:1},
    {id: 4, content:'There are better options out there.', rating:1, user_id:4, provider_id:1},
    {id: 5, content:'Great Service! It saved my life.', rating:3, user_id:5, provider_id:1},
    {id: 6, content:'This place could use some work.', rating:3, user_id:6, provider_id:2},
    {id: 7, content:'I would go back in a heartbeat!', rating:5, user_id:7, provider_id:2},
    {id: 8, content:'There are better options out there.', rating:5, user_id:8, provider_id:2},
    {id: 9, content:'Great Service! It saved my life.', rating:4, user_id:9, provider_id:2},
    {id: 10, content:'This place could use some work.', rating:1, user_id:10, provider_id:2},
    {id: 11, content:'I would go back in a heartbeat!', rating:5, user_id:1, provider_id:3},
    {id: 12, content:'There are better options out there.', rating:2, user_id:2, provider_id:3},
    {id: 13, content:'Great Service! It saved my life.', rating:4, user_id:3, provider_id:3},
    {id: 14, content:'This place could use some work.', rating:3, user_id:4, provider_id:3},
    {id: 15, content:'I would go back in a heartbeat!', rating:4, user_id:5, provider_id:3},
    {id: 16, content:'There are better options out there.', rating:3, user_id:6, provider_id:4},
    {id: 17, content:'Great Service! It saved my life.', rating:5, user_id:7, provider_id:4},
    {id: 18, content:'This place could use some work.', rating:2, user_id:8, provider_id:4},
    {id: 19, content:'I would go back in a heartbeat!', rating:4, user_id:9, provider_id:4},
    {id: 20, content:'There are better options out there.', rating:3, user_id:10, provider_id:4},
    {id: 21, content:'Great Service! It saved my life.', rating:4, user_id:1, provider_id:5},
    {id: 22, content:'This place could use some work.', rating:2, user_id:2, provider_id:5},
    {id: 23, content:'I would go back in a heartbeat!', rating:3, user_id:3, provider_id:5},
    {id: 24, content:'There are better options out there.', rating:2, user_id:4, provider_id:5},
    {id: 25, content:'Great Service! It saved my life.', rating:4, user_id:5, provider_id:5},
    {id: 26, content:'This place could use some work.', rating:4, user_id:6, provider_id:6},
    {id: 27, content:'I would go back in a heartbeat!', rating:5, user_id:7, provider_id:6},
    {id: 28, content:'There are better options out there.', rating:4, user_id:8, provider_id:6},
    {id: 29, content:'Great Service! It saved my life.', rating:3, user_id:9, provider_id:6},
    {id: 30, content:'This place could use some work.', rating:4, user_id:10, provider_id:6},
    {id: 31, content:'I would go back in a heartbeat!', rating:5, user_id:1, provider_id:7},
    {id: 32, content:'There are better options out there.', rating:2, user_id:2, provider_id:7},
    {id: 33, content:'Great Service! It saved my life.', rating:4, user_id:3, provider_id:7},
    {id: 34, content:'This place could use some work.', rating:1, user_id:4, provider_id:7},
    {id: 35, content:'I would go back in a heartbeat!', rating:5, user_id:5, provider_id:7},
    {id: 36, content:'There are better options out there.', rating:1, user_id:6, provider_id:8},
    {id: 37, content:'Great Service! It saved my life.', rating:2, user_id:7, provider_id:8},
    {id: 38, content:'This place could use some work.', rating:4, user_id:8, provider_id:8},
    {id: 39, content:'I would go back in a heartbeat!', rating:2, user_id:9, provider_id:8},
    {id: 40, content:'There are better options out there.', rating:3, user_id:10, provider_id:8},
    {id: 41, content:'Great Service! It saved my life.', rating:4, user_id:1, provider_id:9},
    {id: 42, content:'This place could use some work.', rating:2, user_id:2, provider_id:9},
    {id: 43, content:'I would go back in a heartbeat!', rating:5, user_id:3, provider_id:9},
    {id: 44, content:'There are better options out there.', rating:4, user_id:4, provider_id:9},
    {id: 45, content:'Great Service! It saved my life.', rating:3, user_id:5, provider_id:9},
    {id: 46, content:'This place could use some work.', rating:4, user_id:6, provider_id:10},
    {id: 47, content:'I would go back in a heartbeat!', rating:5, user_id:7, provider_id:10},
    {id: 48, content:'There are better options out there.', rating:4, user_id:8, provider_id:10},
    {id: 49, content:'Great Service! It saved my life.', rating:5, user_id:9, provider_id:10},
    {id: 50, content:'This place could use some work.', rating:4, user_id:10, provider_id:10},
    {id: 51, content:'I would go back in a heartbeat!', rating:5, user_id:1, provider_id:1},
    {id: 52, content:'There are better options out there.', rating:2, user_id:2, provider_id:2},
    {id: 53, content:'Great Service! It saved my life.', rating:3, user_id:3, provider_id:3},
    {id: 54, content:'This place could use some work.', rating:4, user_id:4, provider_id:4},
    {id: 55, content:'I would go back in a heartbeat!', rating:5, user_id:5, provider_id:5},
    {id: 56, content:'There are better options out there.', rating:2, user_id:6, provider_id:11},
    {id: 57, content:'Great Service! It saved my life.', rating:4, user_id:7, provider_id:11},
    {id: 58, content:'This place could use some work.', rating:4, user_id:8, provider_id:11},
    {id: 59, content:'I would go back in a heartbeat!', rating:5, user_id:9, provider_id:11},
    {id: 60, content:'There are better options out there.', rating:3, user_id:10, provider_id:12},
    {id: 61, content:'Great Service! It saved my life.', rating:4, user_id:1, provider_id:12},
    {id: 62, content:'This place could use some work.', rating:1, user_id:2, provider_id:12},
    {id: 63, content:'This place could use some work.', rating:4, user_id:10, provider_id:12},
    {id: 64, content:'I would go back in a heartbeat!', rating:5, user_id:1, provider_id:13},
    {id: 65, content:'There are better options out there.', rating:2, user_id:2, provider_id:13},
    {id: 66, content:'Great Service! It saved my life.', rating:4, user_id:3, provider_id:13},
    {id: 67, content:'This place could use some work.', rating:1, user_id:4, provider_id:13},
    {id: 68, content:'I would go back in a heartbeat!', rating:5, user_id:5, provider_id:14},
    {id: 69, content:'There are better options out there.', rating:1, user_id:6, provider_id:14},
    {id: 70, content:'Great Service! It saved my life.', rating:2, user_id:7, provider_id:14},
    {id: 71, content:'This place could use some work.', rating:4, user_id:8, provider_id:14},
    {id: 72, content:'I would go back in a heartbeat!', rating:2, user_id:9, provider_id:15},
    {id: 73, content:'There are better options out there.', rating:3, user_id:10, provider_id:15},
    {id: 74, content:'Great Service! It saved my life.', rating:4, user_id:1, provider_id:15},
    {id: 75, content:'This place could use some work.', rating:2, user_id:2, provider_id:15},
    {id: 76, content:'I would go back in a heartbeat!', rating:5, user_id:3, provider_id:16},
    {id: 77, content:'There are better options out there.', rating:4, user_id:4, provider_id:16},
    {id: 78, content:'Great Service! It saved my life.', rating:3, user_id:5, provider_id:16},
    {id: 79, content:'This place could use some work.', rating:4, user_id:6, provider_id:16},
    {id: 80, content:'I would go back in a heartbeat!', rating:5, user_id:7, provider_id:17},
    {id: 81, content:'There are better options out there.', rating:4, user_id:8, provider_id:17},
    {id: 82, content:'Great Service! It saved my life.', rating:5, user_id:9, provider_id:17},
    {id: 83, content:'This place could use some work.', rating:4, user_id:10, provider_id:17},
    {id: 84, content:'I would go back in a heartbeat!', rating:5, user_id:1, provider_id:18},
    {id: 85, content:'There are better options out there.', rating:2, user_id:2, provider_id:18},
    {id: 86, content:'Great Service! It saved my life.', rating:3, user_id:3, provider_id:18},
    {id: 87, content:'This place could use some work.', rating:4, user_id:4, provider_id:18},
    {id: 88, content:'I would go back in a heartbeat!', rating:5, user_id:5, provider_id:19},
    {id: 89, content:'There are better options out there.', rating:2, user_id:6, provider_id:19},
    {id: 90, content:'Great Service! It saved my life.', rating:4, user_id:7, provider_id:19},
    {id: 91, content:'This place could use some work.', rating:4, user_id:8, provider_id:19},
    {id: 92, content:'I would go back in a heartbeat!', rating:5, user_id:9, provider_id:20},
    {id: 93, content:'There are better options out there.', rating:3, user_id:10, provider_id:20},
    {id: 94, content:'Great Service! It saved my life.', rating:4, user_id:1, provider_id:20},
    {id: 95, content:'This place could use some work.', rating:1, user_id:2, provider_id:20}
    ])
  .then(() => {
    return knex.raw("SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));")
})
}