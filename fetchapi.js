document.getElementById("mybtn").addEventListener("click",makerequest);

async function makerequest(e){
    try{
        e.preventDefault();
        let name=document.getElementById("myname").value;
        let address=document.getElementById("myaddress").value;
        let phone=document.getElementById("myphone").value;
        let job=document.getElementById("myjob").value;
        let age=document.getElementById("myage").value;
        const init={
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name:name, address:address, phone:phone, job:job, age:age})
        }
        const response = await fetch('https://reqres.in/api/users',init)
        if(!response.ok){
            throw Error(response.statusText);
        }
        console.log(response);
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error);
    }
}