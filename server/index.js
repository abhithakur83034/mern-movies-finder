const express = require("express");
const cors = require("cors");
require("./db/config");
const Movies = require("./db/movies");
const User = require("./db/user");
const multer = require("multer");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/img", express.static("./uploads"));

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await User.insertMany(user);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const result = await User.findOne(req.body);
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

let Admin = {
  email: "admin@gmail.com",
  password: "admin123",
};

app.post("/admlogin", (req, res) => {
  try {
    if (
      req.body.email === Admin.email &&
      req.body.password === Admin.password
    ) 
      res.send(Admin);
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
});

app.post("/add", upload.single("image"), async (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  try {
    const { genres, title, year, runtime, director, actors, plot } = req.body;
    const image = req.file.filename;
    let arrGenres = genres.split(",");
    const movie = {
      image,
      genres: arrGenres,
      title,
      year,
      runtime,
      director,
      actors,
      plot,
    };
    const result = await Movies.insertMany(movie);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/show", async (req, res) => {
  try {
    const movie = await Movies.find(req.body);
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

let genres = [
  "Comedy",
  "Fantasy",
  "Crime",
  "Drama",
  "Music",
  "Adventure",
  "History",
  "Thriller",
  "Animation",
  "Family",
  "Mystery",
  "Biography",
  "Action",
  "Film-Noir",
  "Romance",
  "Sci-Fi",
  "War",
  "Western",
  "Horror",
  "Musical",
  "Sport",
];

app.get("/genres", (req, res) => {
  // console.log(genres)
  try {
    res.send(genres);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5500);
