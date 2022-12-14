/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

import SearchHeader from './SearchHeader'
import SearchForm from './SearchForm'
import Structures from './Structures'
import Counter from './Counter'

function Search() {
  // initializing airtable and states
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_API_KEY}).base(process.env.REACT_APP_AIRTABLE_BASE);

  const [departments, setDepartments] = useState([]);
  const [types, setTypes] = useState([]);
  const [allStructures, setAllStructures] = useState([]);
  const [structuresCount, setStructuresCount] = useState(null);
  const [filteredStructures, setFilteredStructures] = useState([]);
  const [formData, setFormData] = useState(
    {
      department: "ALL",
      type: "ALL",
      text: ""
    }
  )

  // Async function to fetch departments
  const fetchDepartments = async () => {
    const records = await base('departments').select({
      filterByFormula: "NOT({structures} = '')",
      sort: [{field: "num", direction: "asc"}]
    }).all();
    const fetchedDepartments = [];
    for (const record of records) {
      const rec = {
        id: record.id,
        num: record.get('num'),
        name: record.get('name')
      }
      if (fetchedDepartments.some(r => r.id === rec.id)) {
      } else {
        fetchedDepartments.push(rec)
        setDepartments(fetchedDepartments);
      }
    }
  }

  // Async function to fetch types
  const fetchTypes = async () => {
    const records = await base('structure_types').select({
      filterByFormula: "NOT({structures} = '')",
      sort: [{field: "name", direction: "asc"}]
    }).all();
    const fetchedTypes = [];
    for (const record of records) {
      const rec = {
        id: record.id, 
        name: record.get('name')
      }
      if (fetchedTypes.some(r => r.id === rec.id)) {
      } else {
        fetchedTypes.push(rec)
        setTypes(fetchedTypes);
      }
    }
  }

  // Async function to fetch structures
  const fetchStructures = async () => {
    const records = await base('structures').select({
      filterByFormula: "AND(NOT({name} = ''), NOT({publish} = ''))",
      sort: [{field: "postcode", direction: "asc"}]
    }).all();
    const fetchedStructures = [];
    setStructuresCount(records.length)
    for (const record of records) {
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
        departmentId: record.get('departments'),
        publish: record.get('publish')
      }
      if (fetchedStructures.some(r => r.id === rec.id)) {
      } else {
        fetchedStructures.push(rec)
        setAllStructures(fetchedStructures);
        setFilteredStructures(fetchedStructures);
      }
    }
  }

  // useEffect to fetch all data, runs only one time
  useEffect(() => {
    fetchDepartments();
    fetchTypes();
    fetchStructures();
  }, []);

  // useEffect to update the structures display when user is entering infos in the form
  useEffect(() => {
    setFilteredStructures(allStructures)
    if (formData.text !== "" && formData.department === "ALL" && formData.type === "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].name.toLowerCase().includes(formData.text.toLowerCase())) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        return newFilteredArray
      })
    } else if (formData.text !== "" && formData.department !== "ALL" && formData.type === "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].name.toLowerCase().includes(formData.text.toLowerCase()) && previousStructures[i].departmentId[0] === formData.department) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        return newFilteredArray
      })
    } else if (formData.text !== "" && formData.department === "ALL" && formData.type !== "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].name.toLowerCase().includes(formData.text.toLowerCase()) && previousStructures[i].structure_types[0] === formData.type) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        return newFilteredArray
      })
    } else if (formData.text !== "" && formData.department !== "ALL" && formData.type !== "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].name.toLowerCase().includes(formData.text.toLowerCase()) && previousStructures[i].departmentId[0] === formData.department && previousStructures[i].structure_types[0] === formData.type) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        return newFilteredArray
      })
    } else if (formData.text === "" && formData.department !== "ALL" && formData.type === "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].departmentId[0] === formData.department) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        return newFilteredArray
      })
    } else if (formData.text === "" && formData.department === "ALL" && formData.type !== "ALL") {
      setFilteredStructures(previousStructures => {
        const newFilteredArray = []
        for (let i=0 ; i < previousStructures.length ; i++) {
          if (previousStructures[i].structure_types[0] === formData.type) {
            newFilteredArray.push(previousStructures[i])
          }
        }
        return newFilteredArray
      })
    } else if (formData.text === "" && formData.department !== "ALL" && formData.type !== "ALL") {
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

  // handle change on the form, updates the formData state
  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <>
      <SearchHeader structuresCount={structuresCount} />
      <SearchForm 
        departments={departments} 
        types={types} 
        formData={formData} 
        handleChange={(e) => handleChange(e)}
      />
      <Counter count={filteredStructures.length} />
      <br /><br /><br />
      <Structures filteredStructures={filteredStructures} structuresCount={structuresCount} />
    </>
  )
}

export default Search