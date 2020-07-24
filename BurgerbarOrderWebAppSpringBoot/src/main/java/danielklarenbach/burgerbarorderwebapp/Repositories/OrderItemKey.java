package danielklarenbach.burgerbarorderwebapp.Repositories;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class OrderItemKey implements Serializable {
    @Column(name = "order_id")
    private int orderId;

    @Column(name = "dish_id")
    private int dishId;
}
