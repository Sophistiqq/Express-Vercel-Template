import express from 'express';
const app = express();
import path from 'path';

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Ito yung setup para sa views folder, nandon yung mga ejs files
// EJS talaga gamit ko kasi straight HTML lang din yun.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ito yung route para madisplay yung index.ejs sa browser
app.get('/', (req, res) => {
  res.render('index.ejs')
})



export default app;
