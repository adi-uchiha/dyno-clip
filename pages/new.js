import Form from '../components/Form'

const NewClip = () => {
  const clipForm = {
    clipKey: '',
    content: '',
  }

  return <Form formId="add-pet-form" clipForm={clipForm} />
}

export default NewClip
