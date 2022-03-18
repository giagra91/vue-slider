let root = new Vue(
    {
        el: `#root`,
        data: {
            indexImage : 0,
            scrollImage : null,
            check : true,
            isNextDirection : true,
            newImages : {
                titleImg : "",
                descriptionImg : "",
                urlImg : ""
            },
            images : [
                {
                place: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image: 'img/01.jpg',
                },
                {
                place: 'Svizzera',
                text: 'Lorem ipsum',
                image: 'img/02.jpg',
                },
                {
                place: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                image: 'img/03.jpg',
                },
                {
                place: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image: 'img/04.jpg',
                },
                {
                place: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image: 'img/05.jpg',
                },
            ],
        },
        methods: {
            nextImage(){
                if (this.indexImage === this.images.length -1){
                    this.indexImage = 0;
                } else {
                    this.indexImage++;
                }

            },
            prevImage(){
                if (this.indexImage === 0){
                    this.indexImage= this.images.length-1;
                } else {
                    this.indexImage--;
                }
            },
            changeImage(thumbIndex){
                this.indexImage= thumbIndex;
            },
            autoScroll(){
                this.scrollImage = setInterval(() =>{
                    if(this.isNextDirection){
                        this.nextImage();
                    } else {
                        this.prevImage();
                    }
                }, 3000);
            },
            stopScroll(){
                clearInterval(this.scrollImage);
                this.scrollImage=null
            },
            addToList(){
                if(this.newImages.titleImg == "" || this.newImages.descriptionImg == "" || this.newImages.urlImg == ""){
                    console.log(`errore dati inseriti`)
                } else {
                    this.images.push({
                        place : this.newImages.titleImg,
                        text : this.newImages.descriptionImg,
                        image : this.newImages.urlImg,
                })
                } 
                this.titleImg = "",
                this.descriptionImg = "",
                this.urlImg = ""
                console.log(this.newImages.titleImg);
            },
            changeDirection(){
                this.isNextDirection = !this.isNextDirection;
            }
        },
        updated(){
            console.log("ciao");
        }
    },
)
