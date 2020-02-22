
let PlaceArr :Array <any> = [];

class Place {
	name: string = "";
	city: string = "";
	ZIP: number = 0;
	adress: string = "";
	img: string = "";

	constructor (name: string, city: string, ZIP: number, adress: string, img: string){
		this.name = name;
		this.city = city;
		this.ZIP = ZIP;
		this.adress = adress;
		this.img = img;
		PlaceArr.push(this);

	}


	display(){
		$("#card").append(`
		<div class="col-lg-3 col-md-6 mb-4" >
			<div class="card h-100">
				<div class="card-footer cardhat">
            		${this.city}  ${this.ZIP} 
          		</div>
          		<img class="card-img-top" src="${this.img}" alt="">
          		<div class="card-body text-left">
            		<h4 class="card-title">${this.name}</h4>
            		<p class="card-text">
						Adress: ${this.adress}
            		</p>
          		</div>
        	</div>
        </div>	
      `);
	};
}

class Restaurant extends Place {
	telephone : string = "";
	type : string = "";
	web: string = "";
	img: string = "";

	constructor (name : string, city: string, ZIP: number, adress: string, img: string, telephone : string, type : string, web: string){
		super(name, city, ZIP, adress, img);
		this.telephone = telephone;
		this.type = type;
		this.web = web
		this.img = img;
		
	}

	display(){
		$("#card").append(`
		<div class="col-lg-3 col-md-6 mb-4" >
			<div class="card h-100">
				<div class="card-footer">
            		${this.city}  ${this.ZIP} 
          		</div>
          		<img class="card-img-top" src="${this.img}" alt="">
          		<div class="card-body">
            		<h4 class="card-title">${this.name}</h4>
            		<p class="card-text text-left">
  
						Adress: ${this.adress}<br>
						Phone: ${this.telephone}<br>
						Type: ${this.type}<br>
						Web: ${this.web}
            		</p>
          		</div>
        	</div>
        </div>	
      `);
	};
		
}

class MyEvent extends Place {
	eventDate: string = "";
	eventTime: string = ""; 
	price: number = 0;
	img: string = "";

	constructor (name: string, city: string, ZIP: number, adress: string, img: string, eventDate: string, eventTime: string, price: number){
		super(name, city, ZIP, adress, img);
		this.img = img;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.price = price;
		
	}

	display(){
		$("#card").append(`
		<div class="col-lg-3 col-md-6 mb-4" >
			<div class="card h-100">
				<div class="card-footer">
            		${this.city}  ${this.ZIP} 
          		</div>
          		<img class="card-img-top" src="${this.img}" alt="">
          		<div class="card-body text-left">
            		<h4 class="card-title">${this.name}</h4>
            		<p class="card-text text-left">
            			Adress: ${this.adress}<br>
						Date: ${this.eventDate}<br>
						Time: ${this.eventTime}<br>
						Price: ${this.price}€
            		</p>
          		</div>
        	</div>
        </div>	
      `);
	};

}

let CharlesChurch = new Place("St.Charles Church","Vienna", 1010, "Karlsplatz 1", "img/karlskirche.jpg");
let SchönbrunnPark = new Place("Schönbrunn Park","Vienna", 1130, "Maxingstraße 13b", "img/schönbrunnerpark.jpg");
let ON = new Restaurant("ON Restaurant","Vienna", 1050, "Wehrgasse 8", "img/On.jpg", "+43(1)5854900", "Chinese", "http://www.restautant-on.at");
let BioFrische = new Restaurant("Bio Frische","Vienna", 1150, "Schutterheimstraße 6", "img/BioFrische.png", "+43(1)5854900", "Indian", "http://www.biofrische.at");
let PAD = new MyEvent("PanicAtTheDisco","Vienna", 1110, "Guglgasse 8", "img/P!AD.jpg", "Sat, 09.06.2020", "20:00", 120);
let GunsNRoses = new MyEvent("Guns ´n Roses","Vienna", 1010, "Friedrich-Schmidt-Platz 1", "img/FilmFestival.jpg", "Son, 10.06.2020", "19:30", 90.50);
;

console.table(PlaceArr);

for (let i in PlaceArr) {
	let placesContent = PlaceArr[i].display(); 
}
