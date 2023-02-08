import db from "../models/index";
let homeController = async (req, res) => {
  try {
    let data = await db.Info.findAll();
    // console.log(data);
    res.render("homePage.ejs", { dataUser: data });
  } catch (error) {
    // console.log(error);
  }
};

let detailsPage = async (req, res) => {
  try {
    let query = req.params.id;
    let data = await db.Info.findOne({ where: { id: query } });
    // console.log(data);
    return res.render("details.ejs", { detailsUser: data });
  } catch (error) {
    // console.log(error);
  }
};

export default { homeController, detailsPage };
