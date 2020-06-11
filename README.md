# json-placeholder-api
Data Simulation REST API, where you will find two options that are employees and products. Here you can add, edit, delete and get details via SKU or ID. This data allows you to view it in the applications or website that you are developing.

# ¿How to apply it?
When you go to implement this API in your project you can connect for example with axios, fetch, ajax among others.

# Connection using Axios
After installing axios dependency in your project you have to do this:

To get all the data: <br>
axios
 .get('https://json-placeholder-api.herokuapp.com/api/v1/employees').then(response => (response.data))
