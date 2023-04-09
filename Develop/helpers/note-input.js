const fs = require('fs');

const fetchNote = () => {
    const data = fs.readFileSync('./db/db.json')
    if (data != null) {
        notes = JSON.parse(data);
    } else {
        notes = [];
    }
    return notes;
};

const saveNote = (notes) => {
    try {
        fs.writeFileSync('.db/db.json', JSON.stringify(notes))
    }
    catch (err) {
        console.error(err)
    }
};

module.exports = { fetchNote, saveNote };