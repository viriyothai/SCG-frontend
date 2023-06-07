# Front end application

> To get nearby restaurants from backend and show the list of searched restaurants

## Technologies Used

- React

## Installation Guide

- clone the project
- set the back end API URL in /configs/environments.ts
- run the application

## Directory Layout

    .
    ├── public # contain index.html  
    ├── src
    │  ├── configs # to set configuration information
    ├── views
    │  └── home # main page to show the list of searched restaurants
    │      └── sections # sections in the page
    │          ├── pagination # handle pagination of showing list
    │          ├── search # handle search and call API
    │          └── show # show the list of searched restaurants
    └──  README.md
