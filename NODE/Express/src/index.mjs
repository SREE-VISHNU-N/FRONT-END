import express from "express"

const app = express();
const PORT = 3000;

const users = [
    { id: 1, userName: "Sree" },
    { id: 2, userName: "Vishnu" },
    { id: 3, userName: "Vishvan" },
    { id: 4, userName: "Luffy" },
    { id: 5, userName: "Zoro" }
]

const products = [
    {id:1, productName: "iphone 17"},
    {id:2, productName: "iphone 16"},
    {id:3, productName: "s25 ultra"},
    {id:4, productName: "oppo k13"},
    {id:5, productName: "realme p4"}
]


app.listen(PORT, () => {
    console.log(`This is running in port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send({ msg: "This is the Index page" });

})

app.get('/api/users', (req, res) => {         //Get data by search username
    // res.send(users);   // query -> http://localhost:3000/users?filter=userName&value=sr 

    const { filter, value } = req.query;
    if (filter && value) {
        return res.send(users.filter(((user) => user[filter].toLowerCase().includes(value))));
    }
    res.send(users);

})


app.get('/api/users/:id', (req, res) => {     //Get data by id

    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(404).send({ msg: "Bad Request, Invalid ID" });
    }

    const user = users.find((user) => user.id === id);

    if (user) {
        return res.send(user);
    }

    return res.status(404).send({ msg: "User is not found" });
})


app.get('/api/products',(req,res)=>{

    const {filter, value} = req.query;

    if(filter && value) {
        return res.send(products.filter(((product)=>product[filter].toLowerCase().includes(value))));
    }
})


app.get('/api/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(404).send({msg:"Bad request, Invalid ID"});
    }
    
    const product = products.find((user)=>user.id === id);

    if(product){
        return res.send(product);
    }

    return res.send({msg: "Product is not found"});
})

app.use(express.json()); // middleware for convert json data from user

app.post('/api/users',(req,res)=>{  // post request method for store data from frontend
    console.log(req.body);
    const {body} = req;
    const newUser = {id: users[users.length-1].id+1, ...body};
    users.push(newUser);
    res.status(201).send(newUser);
})


app.put('/api/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(404).send({msg:'Bad request, Invalid ID'});
    }

    const userIndex = users.findIndex((user)=>user.id === id);

    if(userIndex === -1){
        res.status(404).send({msg:'User is not found'});
    }
     const {body}=req;
    users[userIndex]={id: id, ...body};
    res.status(200).send({msg:'Data updated'})

})


// query -> http://localhost:3000/users?filter=userName&value=sr