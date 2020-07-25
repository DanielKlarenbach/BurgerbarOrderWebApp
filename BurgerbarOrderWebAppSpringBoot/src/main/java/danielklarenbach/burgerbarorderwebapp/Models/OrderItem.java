package danielklarenbach.burgerbarorderwebapp.Models;

import danielklarenbach.burgerbarorderwebapp.Repositories.OrderItemKey;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    @EmbeddedId
    private OrderItemKey id;

    @MapsId("orderId")
    @ManyToOne(optional=false)
    private UserOrder order;

    @MapsId("dishId")
    @ManyToOne(optional=false)
    private Dish dish;

    private int quantity;

    public OrderItem(UserOrder order, Dish dish, int quantity){
        this.order=order;
        this.dish=dish;
        this.quantity=quantity;
    }

    public OrderItem(OrderItemKey id){
        this.id=id;
    }
}
