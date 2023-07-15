let string = "";
let f=0;
const arr=document.getElementsByTagName("button");

const fun=(e)=>{
  return e.addEventListener('click',()=>{
    let temp=e.innerText;
    if(temp=="="){
      string=eval(string);
      document.getElementById("input").value=string;
      f=1;
    }
    else if(temp=="C"){
      string="";
      document.getElementById("input").value=string;
    }
    else if(temp=="CE"){
        string=string.slice(0, -1); ;
        console.log(string);
        document.getElementById("input").value=string;
    }
    else{
      if(f==1){
      if(temp=="/"||temp=="*"||temp=="+"||temp=="-"){
        string+=temp;
        document.getElementById('input').value=string;
        f=0;
      }
      else{
      string="";
      string+=temp;
      document.getElementById('input').value=string;
      f=0;
      }
      
    }
    else{
      string+=temp;
      document.getElementById('input').value=string;
      f=0;

    }
      
    }

  });
};
for(const x in arr){
  fun(arr[x]);
}
