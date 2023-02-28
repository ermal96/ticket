# My Tickets

## Getting started

You can view a live demo over at [https://my-tickets.ermal.dev](https://my-tickets.ermal.dev)

To get the frontend running locally:

* Clone this repo
* `npm install` to install all required dependencies
* `npm run dev` to start the local server (this project uses [https://vitejs.dev/](https://vitejs.dev))
* `npm run build` to build the project/output folder is `/dist`

Local web server will use port 5173 instead of standard React's port 3000

Packages used

* React
* Redux(toolkit)
* Material UI
* Es lint
* React router
* Axios

## Functionality overview

This app uses firebase to store airplane tickets

**General functionality:**

* Register like User or Admin
* A user can only see the tickets in a table and check also the detail of a ticket by clicking into table row
* An admin can do all things like user but also can create tickets
* All new tickes are validated before saving them into db for duplication
