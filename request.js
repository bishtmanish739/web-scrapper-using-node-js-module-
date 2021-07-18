const request =require('request');
const cheerio =require('cheerio');
console.log('before');
request('https://www.worldometers.info/coronavirus/',cb);
console.log("after");
function cb(error, response, html){
    console.log('error',error);

   if(error){
       console.log('error', error);
   }
    else{
       // console.log('html:',html)
        handlehtml(html);
    }

}
function handlehtml(html){
    let setTool=cheerio.load(html);
    let heading =setTool('#maincounter-wrap span');//.text();
    //console.log(heading)
    for(let i=0;i<heading.length;i++){
        let data=setTool(heading[i]).text();
       if(i==0){
        console.log('Total Case->',data)
       }
       else if(i==1){
        console.log('Deaths->',data)

       }
       else if(i==2){
        console.log('Total Recovered->',data)

       }
    }
    

    //console.log('h1 length is ',h1,h2)
   // console.log('h1 length is ',img['0'].namespace+img['0'].attribs.src)
}


