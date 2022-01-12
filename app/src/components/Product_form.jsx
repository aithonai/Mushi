import "../scss/Product_form.scss"
import { useState, useRef } from "react"
import Card from "./Card"
import MyButton from "./MyButton"
import { UilScenery } from "@iconscout/react-unicons"

function ProductForm() {
  const [images, setImages] = useState([])
  const [preview, setPreview] = useState(null)
  const form = useRef(null)
  const inputFileRef = useRef(null)

  function handleImages(e) {
    e.preventDefault()
    const newImages = Array.from(e.target.files)

    newImages.forEach(image => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImages(images => [...images, image])
      }
      reader.readAsDataURL(image)
    })
  }

  async function Upload(e) {
    e.preventDefault()
    const formBody = new FormData(e.target)
    formBody.delete("image")
    images.forEach((image, index) => {
      formBody.set(`image${index}`, image)
    })

    fetch("http://localhost:7000/products", {
      method: "POST",
      body: formBody,
    }).then(res => resetForm(e))
  }

  async function resetForm(e) {
    setImages([])
    e.target.reset()
  }

  function handlePreview(e) {
    let newPreview = {}
    const elements = form.current.elements
    for (const el of elements) {
      if (el.name !== "") newPreview = { ...newPreview, [el.name]: el.value }
    }
    
    images.length > 0
    ? setPreview({ ...newPreview, "thumbnail": [URL.createObjectURL(images[0])]})
    : setPreview({ ...newPreview })
  }

  return (
    <div className="form_container">
      <aside className="preview">
        <header className="header">Preview</header>

        <section className="card_preview">
          {preview ? (
            <>
              <p>
                This is a preview of the product, you can see how your customers
                will see it
              </p>
              <Card {...preview} />
            </>
          ) : (
            <p>
              To generate a preview just fill the fields
              and click the button below
            </p>
          )}
        </section>

        <section className="controls_preview">
          <button className="button_preview" onClick={handlePreview}>
            Preview
          </button>
          <div className="images_preview">
            {images &&
              images.map(image => (
                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  key={image.name + image.size}
                />
              ))}
          </div>
        </section>
      </aside>
      <form className="form" ref={form} onSubmit={Upload}>
        <header className="header">New product</header>

        <div className="input_images">
          <input
            type="file"
            name="image"
            id="image"
            multiple
            onChange={handleImages}
            ref={inputFileRef}
            hidden={true}
          />
          <button
            className="uploadByDisk"
            onClick={() => inputFileRef.current.click()}
          >
            <UilScenery />
          </button>
        </div>

        <div className="input_container">
          <label htmlFor="Name">Title</label>
          <div>
            <input required type="text" name="name" id="Name" maxLength={255} />
          </div>
        </div>

        <div className="input_container Description">
          <label htmlFor="Description">Description</label>
          <div>
            <textarea
              required
              type="text"
              name="description"
              id="Description"
              maxLength={255}
            />
          </div>
        </div>

        <div className="input_container">
          <label htmlFor="Category">Category</label>
          <input
            required
            type="text"
            name="category"
            id="Category"
            maxLength={255}
          />
        </div>
        
        <div className="shared_fields">
          <div className="input_container">
            <label htmlFor="Stock">Stock</label>
            <input
              required
              type="number"
              name="stock"
              id="Stock"
              maxLength={255}
            />
          </div>

          <div className="input_container">
            <label htmlFor="Price">Price</label>
            <input
              required
              type="number"
              name="price"
              id="Price"
              maxLength={255}
            />
          </div>
        </div>

        <div className="controls">
          <MyButton type="reset" theme="ghost">
            Reset
          </MyButton>
          <MyButton type="submit">Submit</MyButton>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
