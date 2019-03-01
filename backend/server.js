import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dburl = 'mongodb://localhost';
mongodb.MongoClient.connect(dburl,(err,client) => {
     if(err) throw err;
    const db = client.db('crud');

    app.get('/api/games',(req,res) => {
        db.collection('games').find({}).toArray( (err,games) => {
            res.json({games});
        })
    });

    app.use((req, res) =>{
        res.status(404).json({
            errors:{
                global:"still working on it.Please try again later than when we implement it"
            }
        })
    })
    app.listen(8081, () => console.log(1));
})
