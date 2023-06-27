const nominatim = require('nominatim-client');
const client = nominatim.createClient({
  useragent: "Heartbeat",             // The name of your application
  referer: 'https://nominatim.openstreetmap.org/',  // The referer link
});

const express = require("express");
const app = express();
app.use(express.static("www"));
app.use(express.json());
PORT = 8080;
app.post("/cords", (req,res) => {
    async function re_addrs() {
        var client_data = (req.body);
        const query = {
        lat: client_data.lat,
        lon: client_data.lon
        };
        console.log(query)
        result = await client.reverse(query)
        res.send(result)
        console.log(result)
    }
    re_addrs()
});
app.listen(PORT, () => {
    console.log("Server up!");
})
