/* eslint-disable react-hooks/exhaustive-deps */
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
  const [allStructures, setAllStructures] = useState([]);
  const [filteredStructures, setFilteredStructures] = useState([]);

  const [formData, setFormData] = useState(
    {
      department: "ALL",
      type: "ALL",
      text: ""
    }
  )

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
        filterByFormula: "NOT({name} = '')",
        sort: [{field: "postcode", direction: "asc"}]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            const rec = {
              id: record.id, 
              name: record.get('name'), 
              description: record.get('description'),
              structure_types: record.get('structure_types'),
              address: record.get('address'),
              postcode: record.get('postcode'),
              city: record.get('city'),
              email: record.get('email'),
              telephone: record.get('telephone'),
              website: record.get('website'),
              facebook_url: record.get('facebook_url'),
              twitter_url: record.get('twitter_url'),
              instagram_url: record.get('instagram_url'),
              departmentId: record.get('departments')
            }
            if (fetchedStructures.some(r => r.id === rec.id)) {
            } else {
              fetchedStructures.push(rec)
              setAllStructures(fetchedStructures);
              setFilteredStructures(fetchedStructures);
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

  useEffect(() => {
    setFilteredStructures(allStructures)
    if (formData.department !== "ALL" && formData.type === "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].departmentId[0] === formData.department) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        console.log(formData)
        return newFilteredArray
      })
    } else if (formData.department === "ALL" && formData.type !== "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].structure_types[0] === formData.type) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        console.log(formData)
        return newFilteredArray
      })
    } else if (formData.department !== "ALL" && formData.type !== "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].departmentId[0] === formData.department && previousStructures[i].structure_types[0] === formData.type) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        return newFilteredArray
      })
    } else {
      setFilteredStructures(allStructures)
    }
  }, [formData])

  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const displayStructures = filteredStructures.map(structure => {
    return (
      <Structure 
        key={structure.id}
        structure={structure}
        types={types}
      />
    )
  })

  const noResults = 
  <span className="text-center text-light">
    <h1><i class="fa-solid fa-face-meh-blank text-secondary"></i></h1>
    <h3>Uh oh, il semblerait qu'aucun résultat ne corresponde à votre recherche</h3>
  </span>
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 p-5">
            <Header structuresCount={allStructures.length} />
            <Form 
              departments={departments} 
              types={types} 
              formData={formData} 
              handleChange={(e) => handleChange(e)}
            />
            <Footer />
          </div>
          <div className="col-lg-6 col-md-12 p-5">
            <div id="results" class="row justify-content-center mt-5">
              <div class="col-12">
                {displayStructures.length > 0 ? displayStructures : noResults}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;