import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Clip from '../models/Clip'

const Index = ({ clips }) => (
  <>
    {clips.map((clip) => (
      <div key={clip._id}>
        <div className="card">
          <img src={clip.image_url} />
          <h5 className="pet-name">{clip.clipKey}</h5>
          <div className="main-content">
            <p className="pet-name">{clip.clipKey}</p>
            <p className="owner">Owner: {clip.content}</p>

            {/* Extra Pet Info: Likes and Dislikes */}

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${clip._id}/edit`} legacyBehavior>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${clip._id}`} legacyBehavior>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Clip.find({})
  console.log(result)
  const clips = result.map((doc) => {
    const clip = doc.toObject()
    clip._id = clip._id.toString()
    return clip
  })

  return { props: { clips: clips } }
}

export default Index
