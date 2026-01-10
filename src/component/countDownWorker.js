self.onmessage=(event)=>{
  let time=event.data;
const stop=setInterval(()=>{
  if(time<=0){
    clearInterval(time)
    self.postMessage(time)
  }
   else{
     time= time-1000
    self.postMessage(time)
   }
  },1000)
};