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

  async function Upload(e) {
    e.preventDefault()
    const formBody = new FormData(e.target)
    formBody.delete("images")
    form.images.forEach((image, index) => {
      formBody.append(`image${index}`, image)
    })

    const res = await fetch("http://localhost:7000/products", {
      method: "POST",
      body: formBody,
    })

    const data = await res.json()
    console.log(data)
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
          <input
            required
            type="range"
            min="0"
            max="999"
            name="stock"
            id="Stock"
          />
        </div>
      </div>
      <input type="submit" value="Send"/>
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
