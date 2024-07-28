const nama="MASTER";
let usia = 3;


function generateBiodata() {
    if(usia > 10 &&  usia < 18) { 
       let generasi;
       
        console.log('anda remaja');
    } 
    else if(usia > 18 && usia < 30) {
        console.log('anda dewasa')
    }
    else if (usia >30 ) {
        console.log('dah jadi aki aki lu mending jadi singkong aja bro😅')
    }
    else if (usia >2 && usia <10){
        console.log('wah bocil balita main hp telpon fbi 😅')
    }

    else {
        //ini adalah jika kondisi tidak terpenuhi
        console.log('lu pasti bayi');
    }
}

console.log(nama);
console.log(usia);

generateBiodata();

