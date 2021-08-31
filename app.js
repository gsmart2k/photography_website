const express = require("express")
const PORT = process.env.PORT || 4000
var app = express();


app.set('trust proxy', 1)
app.set('view engine', 'ejs')

app.use('/:name', express.static('public'))
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({
    extended:true
}));


const arts = [
    {id:1, name:"Summer Adventures", price:25, image: "assets/Landscape Painting_Ocean_Day.jpg"},
    {id:2, name:"Chaotic Night", price:35, image: "assets/Landscape Painting_Chaotic Night_.jpg"},
    {id:3, name:"Dooms Day", price:40, image: "assets/Landscape Painting_Chaotic Night.jpg"},
    {id:4, name:"Lonely Night", price:50, image: "assets/Landscape Painting_Mountain_Night.jpg"}
]
const models = [
    {id:1, name:"Fortune", images:["assets/Fortune/DSC_7417.jpg","assets/Fortune/DSC_7417.jpg","assets/Fortune/DSC_7438.jpg","assets/Fortune/DSC_7444.jpg","assets/Fortune/DSC_7474.jpg","assets/Fortune/DSC_7454.jpg"] },
    {id:2, name:"Diwura", images:["assets/Diwura/DSC_0237.jpg","assets/Diwura/DSC_0295.jpg","assets/Diwura/DSC_0255.jpg","assets/Diwura/DSC_0270.jpg","assets/Diwura/DSC_0310.jpg","assets/Diwura/DSC_0332.jpg"]},
    {id:3, name:"Inioluwa", images:["assets/inioluwa/Finished/DSC_1752.jpg","assets/inioluwa/Finished/DSC_1767.jpg","assets/inioluwa/Finished/DSC_1772.jpg","assets/inioluwa/Finished/DSC_1798.jpg","assets/inioluwa/Finished/DSC_1854.jpg","assets/inioluwa/finished/DSC_1896.jpg"]},
    {id:4, name:"Janet", images:["assets/Janet/DSC_3093.jpg","assets/Janet/DSC_3101.jpg","assets/Janet/DSC_3163.jpg","assets/Janet/DSC_3171.jpg","assets/Janet/DSC_3370.jpg","assets/Janet/DSC_3404.jpg"] },
    {id:5, name:"Amanda", images:["assets/Amanda/DSC_7299.jpg","assets/Amanda/DSC_7362.jpg","assets/Amanda/DSC_7295.jpg","assets/Amanda/DSC_7255.jpg","assets/Amanda/DSC_7261.jpg","assets/Amanda/DSC_7266.jpg"] }
]

app.get("/", (req,res)=>{
    res.render("index.ejs")
})
app.get("/about", (req,res)=>{
    res.render("about.ejs")
})
app.get("/artstore", (req , res)=>{
    res.render("artstore", {data:arts})
})
app.get("/artstore/:name", (req,res)=>{
        var art = arts.find(c=>
            c.name === req.params.name
        );
    if(art) {
        res.render("artstoredetailspage.ejs", {data:art})
        }else{
        res.render("errorpage.ejs")
        } 
})
app.get("/cart", (req,res)=>{
    res.render("cart.ejs")
});
app.get("/carts/js", (req,res)=>{
    res.render("artstoredetailspage.ejs")
});
app.get("/portfolio/:name", (req,res)=>{
    var model = models.find(mod=>
        mod.name ===  req.params.name   
        )
    if(model) {
    res.render("indportfolio.ejs",{data: model})
    }else{
    res.render("errorpage.ejs")
    } 
})
app.get("/portfolio", (req,res)=>{
    var modelnames = models.map(mod=>{
        return mod.name
    })
    res.render("portfolio.ejs", {data:modelnames})
})
app.get("/photography-website", (req,res)=>{
    res.render("photography-website.ejs")
})
app.get("/detailspage", (req,res)=>{
    res.render("detailspage.ejs")
})
app.get("/contact", (req,res)=>{
    res.render("contact.ejs")
})
app.get("/paymentpage", (req,res)=>{
    res.render("paymentpage.ejs")
})



app.listen(PORT,()=>{
    console.log(PORT)
})
