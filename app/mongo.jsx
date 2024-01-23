const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function Dun() {
   {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
}
Dun().catch(console.dir);

export default Dun


/*const dataPayOpt = {

    email: email,
    name: name,
    checkbox: checkbox,
    text: text,

  };
  const res = await fetch("/api/UsersOpt",{
    method: "POST",
    body: JSON.stringify({ dataPayOpt }),
    "content-type" : "application/json"
  });

  if(!res.ok) {

    const response = await res.json();
    setErrorMessage(response.message);
  }else{
    router.refresh();
    router.push("/");
  }
  console.log(dataPayOpt)
}*/