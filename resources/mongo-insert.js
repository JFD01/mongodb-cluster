use my_db;

for (let i = 0; i < 1000000; ++i) {
    db.students.insert({name: 'toto-'+i});
}
