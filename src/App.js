import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import './App.css';

function App() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyEgsODRGeMoFEqh'}).base('app71fe0Ff06gsUXD');
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    base('departments').select({
        maxRecords: 200,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const dpts = departments;
            const rec = {id: record.id, num: record.get('num'), name: record.get('name')}
            if (dpts.some(r => r.id === rec.id)) {
              console.log('skip')
            } else {
              dpts.push(rec)
              setDepartments(dpts)
              console.log(departments)
            }
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  }, []);
  
  return (
    <div className="App">
      <Form departments={departments} />
    </div>
  );
}

export default App;
