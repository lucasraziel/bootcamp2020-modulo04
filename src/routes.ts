import {Request, Response} from 'express'

import createUser from './services/CreateUser'


export function helloworld(request:Request, response:Response){

  const user = createUser({
    email:'contato@contato.com', 
    password:'123456', 
    name:'Lucas',
    techs:[
      'ReacJS',
      'NodeJS',
      {
        title:'React Native',
        experience:30
      }
    ]
  })
  return response.json({message:'Hello World'})
}