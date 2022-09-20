let ChristmasTreeHeight = prompt('Высота елки', 15);

for(let i = 0; i < Number(ChristmasTreeHeight); i++){
    if(i % 2 == 0){
		let CrownWidth = "";
		for(let j = 0; j < i; j++){
			CrownWidth += "#";
		}
        console.log(CrownWidth);
    }else{
        let CrownWidth = "";
		for(let j = 0; j < i; j++){
			CrownWidth += "*";
		}
        console.log(CrownWidth);
    }
}

