package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, OrderItemKey> {
}
