// import dependencies
const express = require("express") // express library
const pokemons = require("../models/pokemons"); // import pokemons data


// create a router
const router = express.Router()


// ROUTES

// INDEX - GET - LIST ALL FRUITS - /POKEMON
router.get("/", (req, res) => {
  // render an ejs template with all the pokemon
  res.render("index.ejs", { pokemons });
})
  
// NEW - GET - SHOW A FORM TO CREATE A POKEMON
router.get("/new", (req, res) => {
    // render the new template
    res.render("new.ejs")
  })
  
// DESTROY - DELETE - DELETE A POKEMON
router.delete("/:id", (req, res) => {
    // grab the id from the url
    const id = req.params.id
    // splice the object out of the array
    pokemons.splice(id, 1);
    // redirect user back to index
    res.redirect("/pokemon");
  })
  
// UPDATE - PUT - UPDATE A POKEMON
router.put("/:id", (req, res) => {
    // get the id from the url
    const id = req.params.id
    
    // swap the current version with the new version in the array
    pokemons[id] = {
      name: req.body.name,
      img : req.body.image,
      type: [
          req.body.type
      ],
      stats:{
        hp: req.body.hp,
        attack : req.body.attack,
        defense : req.body.defense
      }
    }
    // redirect the user back to the index page
    res.redirect("/pokemon");
  })
  
// CREATE - POST - CREATE A POKEMON
router.post("/", (req, res) => {

  // PUSH THE NEW POKEMON INTO THE ARRAY
  pokemons.push(req.body);
  // SEND USER BACK TO THE INDEX PAGE
  let newPokemon = {
    name: req.body.name,
    img: req.body.image,
    type: [req.body.type],
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
    },
  }
  pokemons.push(newPokemon)
  res.redirect("/pokemon"); 
})
  
  
// EDIT - GET - RENDER FORM TO UPDATE A POKEMON
router.get("/:id/edit", (req, res) => {
    // get the index of the specified pokemon
    const id = req.params.id
    // get the pokemon using the index
    const pokemon = pokemons[id];
    // render the template, pass the pokemon and index
    res.render("edit.ejs", { pokemon, id });
  })
  
  
// SHOW - GET - SHOWS ONE POKEMON - /pokemon/:id
router.get("/:id", (req, res) => {
      // grab the id from the url
      const id = req.params.id
      // create a variable with the pokemon specified
      const pokemon = pokemons[id];
      // dynamically set a class
      // const readyClass = fruit.readyToEat ? "green" : "red"
      // render a template with the fruit
      res.render("show.ejs", { pokemon, id });
  })



// EXPORT OUR ROUTER
module.exports = router
