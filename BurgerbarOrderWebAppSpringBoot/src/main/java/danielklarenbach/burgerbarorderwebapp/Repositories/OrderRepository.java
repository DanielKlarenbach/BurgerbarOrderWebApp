package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.UserOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<UserOrder,Integer> {
}
