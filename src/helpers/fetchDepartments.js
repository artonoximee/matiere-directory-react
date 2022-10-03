// import React from "react"

async function fetchDepartments() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyEgsODRGeMoFEqh'}).base('app71fe0Ff06gsUXD');
  const dpts = [];

  base('departments').select({
      maxRecords: 200,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          const rec = {id: record.id, num: record.get('num'), name: record.get('name')}
          if (dpts.some(r => r.id === rec.id)) {
            console.log('skip')
          } else {
            dpts.push(rec)
          }
      });
      fetchNextPage();
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  
  console.log(dpts);
  return dpts
}

export default fetchDepartments;

