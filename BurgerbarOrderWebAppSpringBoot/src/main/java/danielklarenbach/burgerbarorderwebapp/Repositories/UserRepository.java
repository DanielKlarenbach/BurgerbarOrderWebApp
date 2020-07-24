package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {

    User findByName(String userName);
}
