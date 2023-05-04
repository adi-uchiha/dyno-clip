import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import dbConnect from '../../lib/dbConnect'
import Clip from '../../models/Clip'

/* Allows you to view pet card info and delete pet card*/
const PetPage = ({}) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  // const handleDelete = async () => {
  //   const petID = router.query.id

  //   try {
  //     await fetch(`/api/pets/${petID}`, {
  //       method: 'Delete',
  //     })
  //     router.push('/')
  //   } catch (error) {
  //     setMessage('Failed to delete the pet.') 
  //   }
  // }
  const pet = {
    _id : 134135,
    clipKey: "dfadfghf",
    content: "conteaatt"
  }

  return (
    <div key={pet._id}>
      <div className="card">
        <img src={pet.image_url} />
        <h5 className="pet-name">{pet.clipKey}</h5>
        <div className="main-content">
          <p className="pet-name">{pet.clipKey}</p>
          <p className="owner">Owner: {pet.content}</p>

         

          <div className="btn-container">
            {/* <Link href="/[id]/edit" as={`/${pet._id}/edit`} legacyBehavior>
              <button className="btn edit">Edit</button>
            </Link> */}
            <button className="btn delete" >
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

// export async function getServerSideProps({ params }) {
//   await dbConnect()

//   const pet = await Clip.findById(params.id).lean()
//   pet._id = pet._id.toString()
//   console.log(pet)
//   return { props: { pet } }
// }

export default PetPage
