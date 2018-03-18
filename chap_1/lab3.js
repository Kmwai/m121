db.movies.aggregate([
    {
        $project: {
            mTitle: {
                $split: ['$title', ' ']
            },
            _id: 0
        }
    },
    {
        $project: {
            mTitle: {
                $size: '$mTitle'
            }
        }
    },
    {
        $match: {
            mTitle: {
                $eq: 1
            }
        }
    }
]).itcount()
