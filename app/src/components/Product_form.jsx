import { useState, useRef } from "react"
import "./Product_form.css"
import Card from "./Card"
import MyButton from "./MyButton"
import { UilImagePlus } from "@iconscout/react-unicons"

function ProductForm() {
  const [images, setImages] = useState([])
  const [preview, setPreview] = useState({})
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
    formBody.delete("images")
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
    console.log(form.current)
  }

  return (
    <div className="form_container">
      <form className="form" ref={form} onSubmit={Upload}>
        <h4>New Product</h4>
        <div>
          <label htmlFor="Name">Title</label>
          <div>
            <input required type="text" name="name" id="Name" maxLength={255} />
          </div>
        </div>

        <div>
          <label htmlFor="Description" maxLength={255}>
            Description
          </label>
          <div>
            <textarea
              required
              type="text"
              name="description"
              id="Description"
            />
          </div>
        </div>

        <div>
          <label htmlFor="Category" maxLength={255}>
            Category
          </label>
          <input required type="text" name="category" id="Category" />
        </div>
        <div>
          <label htmlFor="Price" maxLength={255}>
            Price
          </label>
          <input required type="number" name="price" id="Price" />
        </div>
        <div>
          <label htmlFor="Stock" maxLength={255}>
            Stock
          </label>
          <input required type="number" name="stock" id="Stock" />
        </div>

        <div>
          <input
            type="file"
            name="images"
            id="image"
            multiple
            onChange={handleImages}
            ref={inputFileRef}
            hidden={true}
          />
          <button onClick={() => inputFileRef.current.click()}>
            <UilImagePlus />
          </button>
        </div>

        <div className="controls">
          <MyButton type="reset" theme="ghost">
            Reset
          </MyButton>
          <MyButton type="submit" theme="primary">
            Submit
          </MyButton>
        </div>
      </form>
      <aside className="preview">
        <h4>Preview</h4>
        {preview ? <Card /> : null}
        {
          <div className="image_preview">
            {images.length
              ? images.map(image => (
                  <img
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    key={image.name + image.size}
                  />
                ))
              : null}
          </div>
        }
        <button onClick={handlePreview}>Generate new preview</button>
      </aside>
    </div>
  )
}

export default ProductForm
