export const createActivity = async (body) =>{
    const is_area = body.isArea;
    const is_recursive = body.isRecursive;
    delete body.isArea;
    delete body.isRecursive;
    const bodyFormatted = {
        ...body,
        is_area,
        is_recursive
    }
    const req = await fetch('http://localhost:4000/api/v1/activities/create',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyFormatted)
    })
}

export const updateActivity = async (body) =>{
    const is_area = body.isArea;
    const is_recursive = body.isRecursive;
    delete body.isArea;
    delete body.isRecursive;
    const bodyFormatted = {
        ...body,
        is_area,
        is_recursive
    }
    const req = await fetch(`http://localhost:4000/api/v1/activities/update`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyFormatted)
    })
}

export const deleteActivity = async (id) =>{
    const req = await fetch(`http://localhost:4000/api/v1/activities/delete/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}