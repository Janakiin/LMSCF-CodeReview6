var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating the array for object-cards
var PlaceArr = [];
//object constructor
var Place = /** @class */ (function () {
    function Place(name, city, ZIP, adress, img, created) {
        this.name = "";
        this.city = "";
        this.ZIP = 0;
        this.adress = "";
        this.img = "";
        this.name = name;
        this.city = city;
        this.ZIP = ZIP;
        this.adress = adress;
        this.img = img;
        this.created = created;
        PlaceArr.push(this);
    }
    Place.prototype.display = function () {
        $("#card").append("\n\t\t<div class=\"col-lg-3 col-md-6 mb-4\" >\n\t\t\t<div class=\"card h-100\">\n\t\t\t\t<div class=\"card-footer cardhat\">\n            \t\t" + this.city + "  " + this.ZIP + " \n          \t\t</div>\n          \t\t<img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\">\n          \t\t<div class=\"card-body text-left\">\n            \t\t<h4 class=\"card-title\">" + this.name + "</h4>\n            \t\t<p class=\"card-text\">\n\t\t\t\t\t\tAdress: " + this.adress + "\n            \t\t</p>\n          \t\t</div>\n        \t</div>\n        </div>\t\n      ");
    };
    ;
    return Place;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, ZIP, adress, img, telephone, type, web, created) {
        var _this = _super.call(this, name, city, ZIP, adress, img, created) || this;
        _this.telephone = "";
        _this.type = "";
        _this.web = "";
        _this.img = "";
        _this.telephone = telephone;
        _this.type = type;
        _this.web = web;
        _this.img = img;
        return _this;
    }
    Restaurant.prototype.display = function () {
        $("#card").append("\n\t\t<div class=\"col-lg-3 col-md-6 mb-4\" >\n\t\t\t<div class=\"card h-100\">\n\t\t\t\t<div class=\"card-footer\">\n            \t\t" + this.city + "  " + this.ZIP + " \n          \t\t</div>\n          \t\t<img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\">\n          \t\t<div class=\"card-body\">\n            \t\t<h4 class=\"card-title\">" + this.name + "</h4>\n            \t\t<p class=\"card-text text-left\">\n  \n\t\t\t\t\t\tAdress: " + this.adress + "<br>\n\t\t\t\t\t\tPhone: " + this.telephone + "<br>\n\t\t\t\t\t\tType: " + this.type + "<br>\n\t\t\t\t\t\tWeb: " + this.web + "\n            \t\t</p>\n          \t\t</div>\n        \t</div>\n        </div>\t\n      ");
    };
    ;
    return Restaurant;
}(Place));
var MyEvent = /** @class */ (function (_super) {
    __extends(MyEvent, _super);
    function MyEvent(name, city, ZIP, adress, img, eventDate, eventTime, price, created) {
        var _this = _super.call(this, name, city, ZIP, adress, img, created) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.price = 0;
        _this.img = "";
        _this.img = img;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    MyEvent.prototype.display = function () {
        $("#card").append("\n\t\t<div class=\"col-lg-3 col-md-6 mb-4\" >\n\t\t\t<div class=\"card h-100\">\n\t\t\t\t<div class=\"card-footer\">\n            \t\t" + this.city + "  " + this.ZIP + " \n          \t\t</div>\n          \t\t<img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\">\n          \t\t<div class=\"card-body text-left\">\n            \t\t<h4 class=\"card-title\">" + this.name + "</h4>\n            \t\t<p class=\"card-text text-left\">\n            \t\t\tAdress: " + this.adress + "<br>\n\t\t\t\t\t\tDate: " + this.eventDate + "<br>\n\t\t\t\t\t\tTime: " + this.eventTime + "<br>\n\t\t\t\t\t\tPrice: " + this.price + "\u20AC\n            \t\t</p>\n          \t\t</div>\n        \t</div>\n        </div>\t\n      ");
    };
    ;
    return MyEvent;
}(Place));
// creating constructor instances
var CharlesChurch = new Place("St.Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlskirche.jpg", "24 March 1972");
var SchönbrunnPark = new Place("Schönbrunn Park", "Vienna", 1130, "Maxingstraße 13b", "img/schönbrunnerpark.jpg", "20 December 1972");
var ON = new Restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "img/On.jpg", "+43(1)5854900", "Chinese", "http://www.restautant-on.at", "14 October 1994");
var BioFrische = new Restaurant("Bio Frische", "Vienna", 1150, "Schutterheimstraße 6", "img/BioFrische.png", "+43(1)5854900", "Indian", "http://www.biofrische.at", "15 October 1994");
var PAD = new MyEvent("Panic! At The Disco", "Vienna", 1110, "Guglgasse 8", "img/P!AD.jpg", "Sat, 09.06.2020", "20:00", 120, "25 May 1994");
var FilmFestival = new MyEvent("Film Festival", "Vienna", 1010, "Friedrich-Schmidt-Platz 1", "img/FilmFestival.jpg", "Son, 10.06.2020", "19:30", 90.50, "14 October 2019");
;
//iterating threw objects to call display() to display the cards in the web-page
for (var i in PlaceArr) {
    var placesContent = PlaceArr[i].display();
}
//onclick-function for sorting 
function SortDates(Arr) {
    $("#card").empty();
    for (var value in PlaceArr) {
        PlaceArr.sort(function (a, b) {
            var dateA = new Date(a.created);
            var dateB = new Date(b.created);
            return dateB - dateA;
        });
    }
    for (var value in PlaceArr) {
        PlaceArr[value].display();
    }
}
//onclick-event of sort-button to sort the cards begining with the newest
$("#sortingbtn").click(function () {
    SortDates(PlaceArr);
});
