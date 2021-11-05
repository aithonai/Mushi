import { render } from '@testing-library/react'
import ProductForm from '../components/Product_form'

const Form = render(<ProductForm />)

test('Renders the content', async () => {
  expect(await Form.findByLabelText('Name')).toBeInTheDocument()
})
