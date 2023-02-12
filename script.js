const calculateTemp=()=>{
    console.log('hi');
    const numbertemp=document.getElementById('temp').value;
    const selectedtype=document.getElementById('temp-diff');
   const valuetemp= temp-diff.options[selectedtype.selectedIndex].value;

console.log(numbertemp);

   const celtofah=(cel)=>{

    let fah= Math.round((cel*9/5)+32);
    return fah;
   }
   let result;
   if(valuetemp=='cel'){
    console.log('yes');
    result=celtofah(numbertemp);
    document.getElementById('resultcontainer').innerHTML=  `= ${result} ° Fahrenheit `;
    
   }
   else{

    result=celtofah(numbertemp);
    document.getElementById('resultcontainer').innerHTML=  `= ${result} ° Celsius `;
   }

}