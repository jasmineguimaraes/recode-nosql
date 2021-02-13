db.createUser(
    {
        user: "artsy",
        pwd: "recode",
        roles: [
            {
                role: "readWrite",
                db: "artsy"
            }
        ]
    }
) 
