// Validering av formuläret
import { IErrors } from "../sections/ContactFormSection"

export const submitData = async (url: string, method: string, data: string, contentType = 'application/json') => {
    
    const res = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': contentType
        },
        body: data 
    })
    
    if (res.status === 200) 
        return true
    
    
    return false
  
}
export default submitData

export interface IValidate {
    name?: string | null;
    email?: string | null;
    comments?: string | null;
}

interface IFrom {
    name: string
    email: string
    comments: string
}


export const validate = (e: any, form: IFrom | null) => {
    let errors : IErrors = {}
    if (e.type === 'submit') {
        errors.name = validate_name(form!.name)
        errors.email = validate_email(form!.email)
        errors.comments = validate_comments(form!.comments)
    

    } else {
        const {id, value} = e.target
        switch(id) {
            case 'name': 
                errors = {...errors, [id]:validate_name(value)}
                break;
            case 'email': 
                errors = {...errors, [id]:validate_email(value)}
                break;
            case 'comments': 
                errors = {...errors, [id]:validate_comments(value)}
                break;
           
        }
    }
    return errors
}


const validate_name = (value: string | any[]) => {
    if (!value)
        return 'A name is required'
    else if (value.length < 2)
        return 'Must be a valid name'
    else 
        return null
}

const validate_email = (value: string) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!value)
        return 'A email address is required'
    else if (!regex_email.test(value))
        return 'Must be a valid email address'
    else 
        return null
}
const validate_comments = (value: string | any[]) => {
    if (!value)
        return 'A comment is required'
    else if (value.length < 6)
        return 'Your comment must be at least 6 characters long'
    else 
        return null
}
