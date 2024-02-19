export const createActivity = async (body) =>{
    const req = await fetch('http://localhost:4000/api/v1/create',{
        method: 'POST',
        body
    })
    console.log(req);
}