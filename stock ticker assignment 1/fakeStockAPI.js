function getCurrentTime(){
    const now = new Date()
    
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    
    return `${h}/${m}/${s}`;
}

 export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: Number((Math.random() * 3).toFixed(2))/* return a random number between 0 and 3 to two decimal places */, 
        time: getCurrentTime() /* return a timestamp in this format: hh/mm/ss */
    }
}
  
  
 