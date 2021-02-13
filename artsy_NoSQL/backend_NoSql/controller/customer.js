exports.getCustomer = (req, res) => {
    console.log("crud")
    return res.json({
        firstname: "Jasmine",
        lastname: "Guimaraes",
        age: 42,
        address: "374 William S Canning Blvd",
        copyrightby: "https://loizenai.com"
    })
}