use my_db;

let zips = [59000, 59100, 59300, 62210, 62300, 62410];

for (let i = 0; i < 1000000; ++i) {
    db.students.update({},
    { $set: { address: { zip: zips[Math.floor(Math.random() * zips.length)] } } },
    { multi: true });
}

