const fs = require('fs');

const fetchNotes = () => {
    const data = fs.readFileSync('./db/db.json')
    if (data != null) {
        notes = JSON.parse(data);
    } else {
        notes = [];
    }
    return notes;
};

const saveNotes = (notes) => {
    try {
        fs.writeFileSync('.db/db.json', JSON.stringify(notes))
    }
    catch (err) {
        console.error(err)
    }
};