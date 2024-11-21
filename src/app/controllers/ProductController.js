import * as Yup from 'Yup';
import Product from '../models/Product';
import Category from '../models/Category';

class ProductController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { filename: path } = request.file; //QUANDO DESESTRUTURANDO PODE-SE USAR ":" E RENOMEAR A PROPRIEDADE por ex. filename para path
    const { name, price, category_id } = request.body;

    const foundCategory = await Category.findOne({
      where: { id: category_id },
    });

    if (!foundCategory) {
      return response.status(400).json({ error: 'Categoria não encontrada' });
    }

    const product = await Product.create({
      name,
      price,
      category_id: foundCategory.id,
      path,
    });

    return response.status(201).json({ message: 'Ok' });
  }

  async index(request, response) {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });
    return response.json(products);
  }
}

export default new ProductController();
