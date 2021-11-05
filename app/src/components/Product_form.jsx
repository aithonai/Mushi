import { useState } from "react"
import "../components/Product_form.css"

export default function ProductForm() {
  const initialForm = {
    name: "",
    description: "",
    category: "",
    price: 0,
    stock: 0,
    images: [],
  }

  const [form, setForm] = useState(initialForm)

  function handleImages(e) {
    e.preventDefault()
    const formImages = Array.from(e.target.files)

    formImages.forEach(image => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setForm(form => ({ ...form, images: [...form.images, image] }))
      }
      reader.readAsDataURL(image)
    })
  }

  async function resetForm(e) {
    setForm(initialForm)
    e.target.reset()
  }

  async function Upload(e) {
    e.preventDefault()
    const formBody = new FormData(e.target)
    formBody.delete("images")
    form.images.forEach((image, index) => {
      formBody.set(`image${index}`, image)
    })

    fetch("http://localhost:7000/products", {
      method: "POST",
      body: formBody,
    }).then(res => resetForm(e))
  }

  return (
    <form className="Form" onSubmit={Upload}>
      <input
        className="input_image"
        type="file"
        name="images"
        id="image"
        multiple
        onChange={handleImages}
      />
      <div>
        <label htmlFor="Name">Name</label>
        <div>
          <input required type="text" name="name" id="Name" />
        </div>
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <div>
          <textarea required type="text" name="description" id="Description" />
        </div>
      </div>
      <div>
        <label htmlFor="Category">Category</label>
        <div>
          <input required type="text" name="category" id="Category" />
        </div>
      </div>
      <div>
        <label htmlFor="Price">Price</label>
        <div>
          <input required type="number" name="price" id="Price" />
        </div>
      </div>
      <div>
        <label htmlFor="Stock">Stock</label>
        <div>
          <input required type="number" name="stock" id="Stock" />
        </div>
      </div>
      <input type="submit" value="Send" />
      <input type="reset" value="Reset" />
      {
        <div className="image_preview">
          {form.images.length
            ? form.images.map(image => (
                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  key={image.name + image.size}
                />
              ))
            : null}
        </div>
      }
    </form>
  )
}
