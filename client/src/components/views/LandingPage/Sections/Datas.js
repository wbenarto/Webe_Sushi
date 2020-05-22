const categories = [
    {
        "_id":1,
        "name": "Maki"
    },
    {
        "_id":2,
        "name": "Futo Maki"
    },
    {
        "_id":3,
        "name": "Inside Out"
    },
    {
        "_id":4,
        "name": "Specialty Roll"
    },
    {
        "_id":5,
        "name": "Nigiri"
    },
    {
        "_id":6,
        "name": "Sashimi"
    },
    {
        "_id":7,
        "name": "Party Platter"
    },
    {
        "_id":8,
        "name": "Omakase Set"
    },
    {
        "_id":9,
        "name": "Chef on Site"
    }
]

const price =[
    {
        '_id':0,
        'name': "Any",
        'array': []
    },
    {
        '_id': 1,
        'name': "$0 to $9",
        'array': [0, 9]
    },
    {
        '_id': 3,
        'name': "$10 to 25",
        'array': [0, 25]
    },
    {
        '_id': 4,
        'name': "$26 to $50",
        'array': [26, 50]
    },
    {
        '_id': 5,
        'name': "$51 to $100",
        'array': [51, 100]
    },
    {
        '_id': 6,
        'name': "$101 to $500",
        'array': [101, 500]
    },
]

export { price, categories }