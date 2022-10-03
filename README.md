# matiere directory - react version

## Introduction

This website is a personal experiment to understand and learn React in a real-case scenario. The main goal of this work is to create a React App, and to fetch data from an API to provide content to the app. The website's back-end is fully hosted with [Airtable](https://airtable.com/), and the content of the website is loaded via the Airtable API.

## Security

Since this is a fully client-side website, the Airtable API Key is stored in a readable JS file. This is a major security threat. [This process](https://support.airtable.com/docs/creating-a-read-only-api-key), described by Airtable has been followed in order to create an API Key that has a read-only access.

It is planned to later add a dotenv setup in order to securely save this API key.

## Live version

An online version of this app is [available here](https://annuaire-reemploi.netlify.app/).