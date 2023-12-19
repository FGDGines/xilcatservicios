import React from 'react'
import ClientIcon from '../CMR/ClientIcon'
import AddClient from '../CMR/AddClient'

const clients = [
    {
        name: 'lexx',
        id: 1
    },
    {
      name: 'naria',
      id: 2
  },
  {
    name: 'jose',
    id: 3
},
{
  name: 'juan',
  id: 4
},
{
  name: 'pero',
  id: 5
},
{
  name: 'mariangel',
  id: 6
},
{
  name: 'lexx',
  id: 7
},
{
name: 'naria',
id: 8

},
{
name: 'jose',
id: 9
},
{
name: 'juan',
id: 10

},
{
name: 'pero',
id: 11

},
{
name: 'mariangel',
id: 12
},
{
  name: 'lexx',
  id: 13
},
{
name: 'naria',
id: 14
},
{
name: 'jose',
id: 15
},
{
name: 'juan',
id: 16

},
{
name: 'pero',
id: 17
},
]

const Clients = () => {
  return (
    <div className='
      h-full grid grid-cols-2 px-4 py-2 auto-rows-[150px] gap-4
      md:grid-cols-4
      lg:grid-cols-6
      '>{
      clients.map(client => (
        <ClientIcon client={client} key={client.id} />
      ))
    }
    <AddClient />
    </div>
  )
}

export default Clients