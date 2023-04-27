import Form from '../components/Form'

const NewPet = () => {
  const petForm = {
    name: '',
    owner_name: '',
  }

  return <Form formId="add-pet-form" petForm={petForm} />
}

export default NewPet
