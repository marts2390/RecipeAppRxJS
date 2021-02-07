import axios from 'axios'
import MealAPI from './index'

jest.mock('axios')

describe('Fetch Category Data', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      categories: [
        {
          idCategory: '1',
          strCategory: 'Beef',
          strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
          strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]'
        },
        {
          idCategory: '2',
          strCategory: 'Chicken',
          strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
          strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.'
        }
      ]
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(MealAPI.getRecipeData()).resolves.toEqual(data)
  })
})
