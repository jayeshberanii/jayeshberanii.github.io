


const loaddata=()=>{ 
  if(window.localStorage.getItem('user')==null){
    const a=[];
  window.localStorage.setItem(`user`,JSON.stringify(a)) 
  }else{
  let b=JSON.parse(window.localStorage.getItem(`user`)); 
  
  console.log(b);
  
  b.map(e=>{
    const html=`<tr id='i${e.id}'>        
    <td>${e.fname}</td>
    <td>${e.email}</td>
    <td>${e.address}</td>
    <td>${e.gender}</td>
    <td>${e.date}</td>
    <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick={edit(${e.id})}>Edit</button>
    <button class="btn btn-danger" onclick={delet(${e.id})}>Delete</button></td>                    
  </tr>`

  const trow= document.getElementById('tablerow')   
  trow.insertAdjacentHTML('beforeend',html)
  })
}
} 



const adduser=()=>{

  if(window.localStorage.getItem('user')==null){

    const a=[];
    window.localStorage.setItem(`user`,JSON.stringify(a)) 

  }else{

    let b=JSON.parse(window.localStorage.getItem(`user`));  
  
    count=b[b.length-1]?.id +1|| 1 
    console.log(count);   

      const obj={
        fname:document.getElementById('name').value,            
        email:document.getElementById('email').value,  
        address:document.getElementById('address').value,   
        gender:document.querySelector('input[name="gender"]:checked').value,     
        date:document.getElementById('date').value, 
        id:Number(count)
    }
    console.log(obj);     

    b.push(obj)        
    let newa=JSON.stringify(b)

    window.localStorage.setItem(`user`,newa)    

      const html=`<tr id='i${obj.id}'>        
      <td>${obj.fname}</td>
      <td>${obj.email}</td>
      <td>${obj.address}</td>
      <td>${obj.gender}</td>
      <td>${obj.date}</td>
      <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3" onclick={edit(${obj.id})}>Edit</button>
      <button class="btn btn-danger" onclick={delet(${obj.id})}>Delete</button></td>                    
    </tr>`

    const trow= document.getElementById('tablerow')         
    trow.insertAdjacentHTML('beforeend',html)
  }
}
const delet=(e)=>{
    
    document.getElementById(`i${e}`).remove()
    let b=JSON.parse(window.localStorage.getItem(`user`)); 
    const item =b.findIndex(a=>{
      return a.id===e
    })
    console.log(item);
    b.splice(item,1)
    
    window.localStorage.setItem('user',JSON.stringify(b))

}


const edit=(e)=>{
  let b=JSON.parse(window.localStorage.getItem(`user`))
 const item=b.filter(a=>{
              return a.id==e
            })
        console.log(item);
    document.getElementById('id1').value=item[0].id  
    document.getElementById('name1').value=item[0].fname            
    document.getElementById('email1').value=item[0].email
    document.getElementById('address1').value=item[0].address
    document.getElementById('date1').value=item[0].date
    if(item[0].gender=='male'){
      document.getElementById('male1').checked=true      
    }else{
      document.getElementById('female1').checked=true 
    }   
}

const editdetail=()=>{
  let b=JSON.parse(window.localStorage.getItem(`user`))
  id=document.getElementById('id1').value 
  b.forEach(e => {
    if(e.id==id){
      e.fname=document.getElementById('name1').value          
      e.email=document.getElementById('email1').value
      e.address=document.getElementById('address1').value
      e.gender=document.querySelector('input[name="gender1"]:checked').value,    
      e.date=document.getElementById('date1').value
    }
  });  
  window.localStorage.setItem('user',JSON.stringify(b))       
        

  // id=document.getElementById('id1').value 
  // item[0].fname=document.getElementById('name1').value          
  // item[0].email=document.getElementById('email1').value
  // item[0].address=document.getElementById('address1').value
}
date1.max=new Date().toISOString().split('T')[0]
date.max=new Date().toISOString().split('T')[0]

function validateForm() {
  console.log("hello from valid");
  let x = document.forms["formadd"]["f"].value;
  console.log(x);
  let y = document.getElementById('address').value;
  console.log(y);
  // let z = document.getElementById('email').value;
  // console.log(z);
  // let a = document.querySelector('input[name="gender"]:checked').value  
  // console.log(a);
  // let b = document.getElementById('date').value
  // console.log(b);
  
  if (x == "") {
    document.querySelector('.formadd').classList.add('was-validated')
  }else if(y==""){
    document.querySelector('.formadd').classList.add('was-validated')
  }else if(z==""){
    document.querySelector('.formadd').classList.add('was-validated')
  }else if(a==""){
    document.querySelector('.formadd').classList.add('was-validated')
  }else if(b==""){
    document.querySelector('.formadd').classList.add('was-validated')
  }
}


document.querySelector('.formadd').addEventListener('submit',adduser)
//document.querySelector('.save').addEventListener('submit',editdetail)
document.querySelector('.formedit').addEventListener('submit',editdetail)