package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Integer> {
}
