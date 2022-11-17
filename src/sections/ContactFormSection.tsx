import React, { useState } from 'react'
import { submitData, validate } from '../scripts/Submit_And_Validation'

const ContactFormSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState('')
    const [failedSubmit, setFailedSubmit] = useState('')

    const handleChange = (e) => {
        const {id, value} = e.target
        
        switch(id) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'comments':
                setComments(value)
                break
        }

        setErrors({...errors,[id]: validate(e)})
    }
   
    const handelSubmit = async (e) => {
        e.preventDefault()
        setFailedSubmit(false)
        setSubmitted(false)
        setErrors(validate(e, {name, email, comments}))

        if (errors.name === null && errors.email === null && errors.comments === null) {
            
            let json = JSON.stringify({ name, email, comments})
           
            
            setName('')
            setEmail('')
            setComments('')
            setErrors({})

            if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)) {
                setSubmitted(true)
                setFailedSubmit(false)
            } else {
                setSubmitted(false)
                setFailedSubmit(true)
            }
           
            
           
        } else {
            setSubmitted(false)
        }
    }

    


    return (
        // Formulär sektionen.
        <section className="contact-form">
                <div className="container">
                        
                        {
                        submitted ? (
                        <div className="alert alert-success text-center"  role="alert">
                                <h1>Thank you for your opinion!</h1>
                                <p className="confirm">We will contact you as soon as possible.</p>
                            </div> ) : (<></>)
                            
                        }
                        
                        {
                        failedSubmit ? (
                        <div className="alert alert-danger text-center" role="alert">
                                <h1>Someting went wrong!</h1>
                                <p className="confirm">We couldn't submit your comment right now.</p>
                            </div> ) : (<></>)
                            
                        }
                    
                        <h2>Come In Contact With Us</h2>
                        
                        <form onSubmit={handelSubmit} noValidate>
                            <div>
                                <input id="name" className={(errors.name ? 'error': '')} type="text" placeholder="Your Name" value={name} onChange={handleChange}/>
                                <div id="nameErrorMessage" className="errorMessage">{errors.name}</div>
                            </div>
                            <div>
                                <input id="email" className={(errors.email ? 'error': '')} type="email" placeholder="Your Mail" value={email} onChange={handleChange}/>
                                <div id="emailErrorMessage" className="errorMessage">{errors.email}</div>
                            </div>
                            <div className="textarea">
                                <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #ff7373'}: {} )} placeholder="Comments" value={comments} onChange={handleChange}></textarea>
                                <div id="commentErrorMessage" className="errorMessage">{errors.comments}</div>
                            </div>
                            <div className="formBtn">
                                <button id="send-button" type="submit" className="btn-theme">Post Comments</button>
                            </div>
                        </form>
                                
                            
                    
            </div>
        </section>
    )
}

export default ContactFormSection