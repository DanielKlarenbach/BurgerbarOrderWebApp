package danielklarenbach.burgerbarorderwebapp.Repositories;

import danielklarenbach.burgerbarorderwebapp.Models.Dish;
import danielklarenbach.burgerbarorderwebapp.Models.UserOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
@NoArgsConstructor
public class OrderItemKey implements Serializable{
    private int orderId;
    private int dishId;

    public OrderItemKey(int orderId,int dishId){
        super();
        this.dishId=dishId;
        this.orderId=orderId;
    }
}
