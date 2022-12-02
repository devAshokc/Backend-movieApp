// mongosh

//  show dbs

// use local , use config, use admin -> we can also create 
// new database without having  mongodb Automatically create that we entered ex: use b39tamil

// show collections

db.pizzas.insertMany([
    {
        "id": "99",
        "name": "PEPPER BARBECUE CHICKEN",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "category": "nonveg",
        "image": "https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423",
        "description": "PEPPER BARBECUE CHICKEN"
    },
    {
        "id": "100",
        "name": "Chicken Golden Delight",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "category": "nonveg",
        "image": "https://img.freepik.com/free-photo/top-view-pizza-with-salmon-philadelphia-cheese_140725-12443.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
        "description": "Chicken Golden Delight"
    },
    {
        "id": "101",
        "name": "CHICKEN SAUSAGE",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "category": "nonveg",
        "image": "https://img.freepik.com/free-photo/top-view-mix-pizza-with-chicken-sausages-mushrooms-olives-board_140725-11548.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=sph",
        "description": "CHICKEN SAUSAGE"
    },
    {
        "id": "102",
        "name": "Indi Chicken Tikka",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "category": "nonveg",
        "image": "https://img.freepik.com/free-photo/lahmajun-turkish-pizza-with-minced-meat_140725-181.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
        "description": "Indi Chicken Tikka"
    },
    {
        "id": "103",
        "name": "Peri-Peri Chicken",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 200,
                "medium": 350,
                "large": 400
            }
        ],
        "category": "nonveg",
        "image": "https://img.freepik.com/premium-photo/peri-peri-hot-sour-pizza-with-tomato-sauce-mayo-isolated-wooden-board-top-view-italian-food-wooden-background_689047-1940.jpg?size=626&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=sph",
        "description": "Peri-Peri Chicken"
    },
    {
        "id": "104",
        "name": "CHEESE N CORN",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 100,
                "medium": 250,
                "large": 350
            }
        ],
        "category": "veg",
        "image": "https://img.freepik.com/free-photo/top-view-italian-pizza-topped-with-french-fries_140725-7078.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
        "description": "CHEESE N CORN"
    },
    {
        "id": "105",
        "name": "Deluxe Veggie",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 100,
                "medium": 250,
                "large": 350
            }
        ],
        "category": "veg",
        "image": "https://img.freepik.com/free-photo/pizza-with-peppers-olives-cheese_501050-854.jpg?size=626&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=sph",
        "description": "Deluxe Veggie"
    },
    {
        "id": "106",
        "name": "Peppy Paneer",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 150,
                "medium": 250,
                "large": 350
            }
        ],
        "category": "veg",
        "image": "https://img.freepik.com/free-photo/top-view-lahmacun-with-parsley-lemon-ayran-rag-wooden-food-tray_176474-3388.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
        "description": "Peppy Paneer"
    },
    {
        "id": "107",
        "name": "Mexican Green Wave",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 150,
                "medium": 250,
                "large": 350
            }
        ],
        "category": "veg",
        "image": "https://img.freepik.com/premium-photo/sliced-portion-spinach-tomatoes-pies-quiche-with-autumn-leaves-white-marble-table_721668-8.jpg?size=338&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
        "description": "Mexican Green Wave"
    },
    {
        "id": "108",
        "name": "Veg Extravaganza",
        "Varients": [
            "small",
            "medium",
            "large"
        ],
        "prices": [
            {
                "small": 100,
                "medium": 250,
                "large": 350
            }
        ],
        "category": "veg",
        "image": "https://img.freepik.com/free-photo/top-view-mushroom-pizza-with-red-tomatoes-bell-peppers-olives-mushrooms-all-sliced-inside-with-oil-dark-desk-food-pizza-dough_140725-22888.jpg?size=626&ext=jpg&ga=GA1.2.2047846769.1664917423&semt=ais",
        "description": "Veg Extravaganza"
    }
])
db.movies.find({})

db.movies.find({}).pretty()

db.movies.find({}).count()
db.movies.find({
    rating: { $lte: 7 }
})


// FIND
// Projections
// inclusive
db.movies.find({}, { name: 1, rating: 1 })

// Projections
// exclusive
db.movies.find({}, { name: 0, rating: 0 })

// Exception Rule
db.movies.find({}, { name: 1, rating: 1, _id: 0 })

// Giving Arguments
db.movies.find({ rating: { $eq: 7 } }, { name: 1, rating: 1, _id: 0 }).count()
db.movies.find({ rating: { $eq: 7 } }, { name: 1, rating: 1, _id: 0 }).pretty()

// Sorting Ascending
db.movies.find({}, { name: 1, rating: 1, _id: 0 }).sort({ rating: 1 })

// Sorting descending
db.movies.find({}, { name: 1, rating: 1, _id: 0 }).sort({ rating: -1 })
// limit 2
db.movies.find({}, { name: 1, rating: 1, _id: 0 }).sort({ rating: -1, name: 1 }).limit(2)
// skip 2
db.movies.find({}, { name: 1, rating: 1, _id: 0 }).sort({ rating: -1, name: 1 }).limit(2).skip(2)

// #2 database

db.orders.insertMany([
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
])

db.orders.find({}, { _id: 0 })

// Aggregate pipeline Stages --- comes with stage 1,  stage 2, .....

db.orders.aggregate({
    $match: { status: "urgent" }
},
    { $group: { _id: "$productName", totalUrgentQut: { $sum: "$quantity" } } })

// Rating - > Update
// {
//     acknowledged: true,
//     insertedId: null,
//     matchedCount: 1,
//     modifiedCount: 1,
//     upsertedCount: 0
//   }

// updateOnes
db.movies.updateOne({
    name: "RRR"
}, { $set: { rating: 9 } })

// findOnes
db.movies.findOne({
    name: "RRR"
})
// updateMany
db.movies.updateMany({}, { $set: { language: "English" } })