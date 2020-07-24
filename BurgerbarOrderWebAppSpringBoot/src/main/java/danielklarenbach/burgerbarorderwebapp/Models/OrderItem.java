package danielklarenbach.burgerbarorderwebapp.Models;

import danielklarenbach.burgerbarorderwebapp.Repositories.OrderItemKey;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class OrderItem {
    @EmbeddedId
    OrderItemKey id;

    @ManyToOne(optional=false)
    @MapsId("order_id")
    private UserOrder order;

    @ManyToOne(optional=false)
    @MapsId("dish_id")
    private Dish dish;

    private int quantity;
}
