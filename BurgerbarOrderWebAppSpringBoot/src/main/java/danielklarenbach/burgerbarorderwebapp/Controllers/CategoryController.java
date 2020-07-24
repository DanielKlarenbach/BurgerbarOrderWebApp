package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.Category;
import danielklarenbach.burgerbarorderwebapp.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CategoryController {
    @Autowired
    private CategoryRepository repository;

    @RequestMapping("/categories")
    public List<Category> getAllCategories(){
        return repository.findAll();
    }
}
