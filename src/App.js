import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import './App.css';

function App() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyEgsODRGeMoFEqh'}).base('app71fe0Ff06gsUXD');
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    base('departments').select({
        maxRecords: 99,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const department = record.get('num') + " - " + record.get('name')
            setDepartments(prevDpt => [...prevDpt, department])
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
