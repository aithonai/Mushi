import { 
  FormContainer, Form, Title, Inputs, JoinInputs, Input, 
  TextArea, Controls, FormControls, PreviewCard 
} from "./FormStyles"
import { useState, useEffect, useRef  } from "react"
import Card from "../Card/Card"
import MyButton from "../MyButton"

function ProductForm() {
  const formRef = useRef()
  const inputFileRef = useRef()
  const [form, setForm] = useState({data: undefined, image: []})
  const [isLoadingImage, setIsLoadingImage] = useState(false)
  const [preview, setPreview] = useState({})
  const [previewImages, setPreviewImages] = useState([])

  useEffect(() => {
    setPreviewImages(form.image.map(img => URL.createObjectURL(img)))
  }, [form.image])

  useEffect(() => {
    setPreview({
      ...form.data,
      'image': previewImages,
      'thumbnail': previewImages
    })
  }, [form.data, previewImages])

  function readImages(image) {
    const reader = new FileReader()
    reader.onloadstart = () => setIsLoadingImage(true)
    reader.onloadend = () => {
      setForm({...form, 'image': [...form.image, image]})
      setIsLoadingImage(false)
    }
    reader.readAsDataURL(image)
  }

  async function handleImages(e) {
    e.preventDefault()
    const imageInInputFile = Array.from(e.target.files)
    imageInInputFile.forEach(image => readImages(image))
  }

  function handleChange(e) {
    if (e.target === inputFileRef.current) return
    setForm({...form, data: {...form.data, [e.target.name]: e.target.value}})
  }

  function Upload(e) {
    e.preventDefault()
    e.stopPropagation()
    const productFormData = new FormData(e.target)
    form.image.forEach((image, index) => productFormData.set("image" + index, image))

    fetch("/products", {
      method: "POST",
      body: productFormData,
    }).then(resetForm)

    resetForm()
  }

  const resetForm = () => {
    formRef.current.reset()
    setForm({...form, data: undefined, image: []})
  }
  
  return (
      <FormContainer>
        <Form autocomplete="off" ref={formRef} onSubmit={Upload} onChange={handleChange}>
          <Title>New product</Title>
            {
              (form.data || previewImages.length > 0) && !isLoadingImage
              && <PreviewCard> <Card {...preview} /> </PreviewCard>
            }
          <Inputs>
            <JoinInputs>
              <div>
                <label htmlFor="name">Title</label>
                <Input required name="name" maxLength={255} />
              </div>

              <div>
                <label htmlFor="category">Category</label>
                <Input required type="text" name="category" maxLength={255} />
              </div>
            </JoinInputs>

            <label htmlFor="description">Description</label>
            <TextArea required type="text" name="description" maxLength={255} />

            <JoinInputs>
              <div>
                <label htmlFor="stock">Stock</label>
                <Input required type="number" name="stock" maxLength={255} />
              </div>

              <div>
                <label htmlFor="price">Price</label>
                <Input required type="number" name="price" maxLength={255} />
              </div>
            </JoinInputs>
          </Inputs>

          <Controls>
            <MyButton onClick={() => inputFileRef.current.click()} theme="ghost" container="div" >
              Add image
              <input
                multiple
                type="file"
                onChange={handleImages}
                ref={inputFileRef}
                hidden={true}
              />
            </MyButton>
            <FormControls>
              <MyButton type="submit" disabled={isLoadingImage}>Submit</MyButton>
              <MyButton type="reset" onClick={resetForm} theme="ghost">Reset</MyButton>
            </FormControls>
          </Controls>
        </Form>
      </FormContainer>
  )
}

export default ProductForm
