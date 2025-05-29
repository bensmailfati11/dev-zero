const express = require('express');
const MongoConnection =require("./config/db")
const mongoose = require("mongoose")
const cities = require("./routes/cities")
const cors = require('cors');
const { default: mongoConnection } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// const cities = [
//     {
//       id: 1,
//       name: "Marrakech",
//       description: "The Red City known for its bustling souks, palaces, and gardens",
//       highlights: ["Jemaa el-Fnaa", "Bahia Palace", "Majorelle Garden"],
//       image: "https://www.nomadicchica.com/en/productive/wp-content/uploads/2020/02/Marrakesh-best-things-to-do-Morocco-Woman-Gloria-Apara-Nomadicchica.com-7.jpg",
//     },
//     {
//       id: 2,
//       name: "Fes",
//       description: "The cultural and spiritual heart of Morocco with the world's oldest university",
//       highlights: ["Fes el-Bali", "Al Quaraouiyine University", "Tanneries"],
//       image: "https://th.bing.com/th/id/OIP.4o9dJwS4jX9nd2IWOQ05pAHaE8?rs=1&pid=ImgDetMain"
//     },
//     {
//       id: 3,
//       name: "Chefchaouen",
//       description: "The Blue Pearl of Morocco nestled in the Rif Mountains",
//       highlights: ["Blue-washed Medina", "Kasbah Museum", "Ras Elma Park"],
//       image: "https://img.locationscout.net/images/2021-01/mann-in-chefchaouen-morocco-lt29_l.jpg"
//     },
//     {
//       id: 4,
//       name: "Casablanca",
//       description: "Morocco's largest city and economic hub with a blend of modern and traditional",
//       highlights: ["Hassan II Mosque", "Corniche", "Old Medina"],
//       image: "https://images.ctfassets.net/bth3mlrehms2/1TwENu0ZXSnwNu6GzVfVE4/fa1176816167c1a03589cd613458585d/Marokko_Casablanca_Hassan_II_Moschee.jpg"
//     },
//     {
//       id: 5,
//       name: "Sahara Desert",
//       description: "The majestic golden dunes offering unforgettable desert experiences",
//       highlights: ["Erg Chebbi Dunes", "Camel Trekking", "Desert Camps"],
//       image: "https://www.icietlabas.fr/wp-content/uploads/2018/03/Mergouza-Maroc-Sahara-desertsahara-voyage-blog-blogvoyage-desert-icietlabas-69.jpg"
//     },
//     {
//       id: 6,
//       name: "Essaouira",
//       description: "A charming coastal town with fortified walls and artistic vibe",
//       highlights: ["Medina Fortifications", "Fishing Port", "Gnaoua Music Festival"],
//       image: "https://www.marruecos.com/wp-content/uploads/Por-que-visitar-Essaouira.jpg"
//     }
//   ];

MongoConnection()

// Sample test route


app.use("/api/cities" , cities)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));