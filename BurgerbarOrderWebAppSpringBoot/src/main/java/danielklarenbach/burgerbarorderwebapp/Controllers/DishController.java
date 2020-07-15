package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.Dish;
import danielklarenbach.burgerbarorderwebapp.Repositories.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DishController {
    @Autowired
    private DishRepository repository;

    @RequestMapping("/dishes")
    public List<Dish> getAllDishes(){
        return repository.findAll();
    }

    @RequestMapping("/dishes/{category}")
    public List<Dish> getAllDishesInCategory(@PathVariable("category") String category){
        return repository.findByCategory(category);
    }

}
