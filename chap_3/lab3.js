db.air_routes.aggregate([
    {
        $match: { 'airplane' : { $in : [/380/, /747/]}}            
        
    },
    {
        $group: {
            _id: '$airline.name',
            routes: { $sum: 1 }
        }
    },
    {
        $sort: {
            routes: -1
        }
    },
    { $limit: 1 }
])
