import * as Yup from 'Yup';
import Product from '../models/Product';

class ProductController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { filename: path } = request.file; //QUANDO DESESTRUTURANDO PODE-SE USAR ":" E RENOMEAR A PROPRIEDADE por ex. filename para path
    const { name, price, category } = request.body;

    const product = await Product.create({
      name,
      price,
      category,
      path,
    });

    return response.status(201).json({ message: 'Ok' });
  }

  async index(request, response) {
    const products = await Product.findAll();
    return response.json(products);
  }
}

export default new ProductController();
