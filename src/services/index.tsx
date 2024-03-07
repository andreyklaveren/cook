import * as recipes from "./recipesService"
import * as preparations from "./preparationsService"
import * as ingredients from "./ingredientsService"

export const services = {
    recipes,
    ingredients,
    preparations,

    storage: {
        imagePath: 
        "https://wpidyerpiuvxewbtpvli.supabase.co/storage/v1/object/public/Ingredients"
    }
}