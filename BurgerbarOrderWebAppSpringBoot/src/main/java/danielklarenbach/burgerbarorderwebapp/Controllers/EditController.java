package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.ContactData;
import danielklarenbach.burgerbarorderwebapp.Models.Dish;
import danielklarenbach.burgerbarorderwebapp.Repositories.ContactDataRepository;
import danielklarenbach.burgerbarorderwebapp.Repositories.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/edit")
public class EditController {
    @Autowired
    DishRepository dishRepository;
    @Autowired
    ContactDataRepository contactDataRepository;

    @PostMapping("/adddish")
    public void addDish(@RequestBody Dish dish){
        dishRepository.save(dish);
    }

    @DeleteMapping("/deletedish/{name}")
    public void deleteDish(@PathVariable String name){
        Dish dish=dishRepository.findByName(name);
        dishRepository.delete(dish);
    }

    @PutMapping("/editcontactdata")
    public void editContactData(@RequestBody ContactData contactData){
        contactDataRepository.save(contactData);
    }
}
