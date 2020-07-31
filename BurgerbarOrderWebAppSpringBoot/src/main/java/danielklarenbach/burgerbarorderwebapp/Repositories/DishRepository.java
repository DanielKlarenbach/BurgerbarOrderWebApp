package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DishRepository extends JpaRepository <Dish,Integer> {
    List<Dish> findByCategory(String category);

    Dish findByName(String name);

    @Query("select dish from Dish dish where dish.category=?1 and dish.id between ?2 and (?2+5)")
    List<Dish> findSixDishesFromGivenId(String category,Integer Id);
}
