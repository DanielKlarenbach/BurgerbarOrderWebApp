package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.Dish;
import danielklarenbach.burgerbarorderwebapp.Models.OrderItem;
import org.hibernate.criterion.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, OrderItemKey> {
    @Query("select orderItem from OrderItem orderItem inner join orderItem.dish  where orderItem.order.id=?1")
    List <OrderItem> findDishesForGivenOrder(Integer id);
}
