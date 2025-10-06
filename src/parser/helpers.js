export const parseXmlDb = (xmlData) => {
    const tableNames = {};
    const fieldNames = {};
    const fieldRange = {};
    const pkeys      = {};

    for (let i = 0; i < Object.keys(xmlData.database.table).length; i++) {
        let table = xmlData.database.table[i];
        tableNames[table.$.shortname] = table.$.name;

        for (let ii = 0; ii < table.fields[0]['field'].length; ii++) {
            let field = table.fields[0]['field'][ii];
            fieldNames[field.$.shortname] = field.$.name;

            if (field.$.type == 'DBOFIELDTYPE_INTEGER') {
                fieldRange[table.$.name + field.$.name] = parseInt(field.$.rangelow);
            } else {
                fieldRange[table.$.name + field.$.name] = 0;
            }

            if ('key' in field.$ && field.$.key === 'True') {
                pkeys[table.$.name] = field.$.name;
            }
        }
    }

    return {
        tableNames,
        fieldNames,
        fieldRange,
        pkeys
    }
};

export const readNullbyteStr = (reader, length) => {
    let start = reader.position;
    let output = reader.readBytes(reader.buffer.indexOf('\x00', start) - start).toString();
    reader.position = start + length;

    let badCharacters = [
        '"',
        ',',
        '\a',
        '\b',
        '\f',
        '\r',
        '\t',
    ];

    let replacedOutput = output;

    for (let i = 0; i < badCharacters.length; i++) {
        replacedOutput = replacedOutput.replace(badCharacters[i], '');
    }

    return replacedOutput.replace('\n', '\\n');
};

export default {
    parseXmlDb,
    readNullbyteStr
};