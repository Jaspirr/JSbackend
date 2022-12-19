import React from 'react'
import { IUserContext, UserContext } from '../contexts/UserContext'

const CreateForm = () => {
    const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext

  return (
    <form onSubmit={create} className='d-grid mb-5'>
      <h3 className="display-6 mb-4">CREATE PRODUCT</h3>
      <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter Firstname...' />
      <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter Lastname...' />
      <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter email...' />
      <input autoComplete="true" value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter Password...' />
      <button type='submit' className='btn btn-success'>ADD</button>
    </form>
  )
}

export default CreateForm