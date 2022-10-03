import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import Structure from './components/Structure'
import './App.css';

function App() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyEgsODRGeMoFEqh'}).base('app71fe0Ff06gsUXD');
  const [departments, setDepartments] = useState([]);
  const [types, setTypes] = useState([]);
  const [structures, setStructures] = useState([]);

  const fetchDepartments = async () => {
    const fetchedDepartments = [];
    base('departments').select({
        maxRecords: 200,
        filterByFormula: "NOT({structures} = '')",
        sort: [{field: "num", direction: "asc"}]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const rec = {id: record.id, num: record.get('num'), name: record.get('name')}
            if (fetchedDepartments.some(r => r.id === rec.id)) {
            } else {
              fetchedDepartments.push(rec)
              setDepartments(fetchedDepartments);
            }
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  }

  const fetchTypes = async () => {
    const fetchedTypes = [];
    base('structure_types').select({
        maxRecords: 100,
        filterByFormula: "NOT({structures} = '')",
        sort: [{field: "name", direction: "asc"}]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const rec = {id: record.id, name: record.get('name')}
            if (fetchedTypes.some(r => r.id === rec.id)) {
            } else {
              fetchedTypes.push(rec)
              setTypes(fetchedTypes);
            }
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  }

  const fetchStructures = async () => {
    const fetchedStructures = [];
    base('structures').select({
        maxRecords: 1000,
        sort: [{field: "postcode", direction: "asc"}]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const rec = {
              id: record.id, 
              name: record.get('name'), 
              description: record.get('description')
            }
            if (fetchedStructures.some(r => r.id === rec.id)) {
            } else {
              fetchedStructures.push(rec)
              setStructures(fetchedStructures);
            }
        });
        fetchNextPage();
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  }

  useEffect(() => {
    fetchDepartments();
    fetchTypes();
    fetchStructures();
  }, []);

  const displayStructures = structures.map(structure => 
    <Structure structure={structure} />
  )
  
  return (
    <>
      <div className="container">
        <Header />
        <Form departments={departments} types={types} />
        <div id="results">
          {displayStructures}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;