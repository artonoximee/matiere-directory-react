import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import './App.css';

function App() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyEgsODRGeMoFEqh'}).base('app71fe0Ff06gsUXD');
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    const dpts = [];
    base('departments').select({
        maxRecords: 200,
        filterByFormula: "NOT({structures} = '')",
        sort: [{field: "num", direction: "asc"}]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const rec = {id: record.id, num: record.get('num'), name: record.get('name')}
            if (dpts.some(r => r.id === rec.id)) {
            } else {
              dpts.push(rec)
              setDepartments(dpts);
            }
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  }

  useEffect(() => {
    fetchDepartments();
  }, []);
  
  return (
    <div className="App">
      <Form departments={departments} />
    </div>
  );
}

export default App;
