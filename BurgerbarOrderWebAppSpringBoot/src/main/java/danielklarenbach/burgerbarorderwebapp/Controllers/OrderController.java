package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.Dish;
import danielklarenbach.burgerbarorderwebapp.Models.OrderItem;
import danielklarenbach.burgerbarorderwebapp.Models.User;
import danielklarenbach.burgerbarorderwebapp.Models.UserOrder;
import danielklarenbach.burgerbarorderwebapp.Repositories.OrderItemKey;
import danielklarenbach.burgerbarorderwebapp.Repositories.OrderItemRepository;
import danielklarenbach.burgerbarorderwebapp.Repositories.OrderRepository;
import danielklarenbach.burgerbarorderwebapp.Repositories.UserRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceUnitUtil;
import java.sql.Date;
import java.sql.Timestamp;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;

    @PostMapping("/order")
    public String getOrder(@RequestBody Dish[] dishes, @RequestHeader("Authorization") String header){
        String withoutBasic=header.substring(6);
        String userName=new String(Base64.decodeBase64(withoutBasic.getBytes())).split(":")[0];
        User user=userRepository.findByName(userName);
        UserOrder order=new UserOrder(user,new Timestamp(new java.util.Date().getTime()));
        orderRepository.save(order);
        OrderItem orderItem;
        for(Dish dish : dishes) {
            orderItem=new OrderItem(order,dish,1);
            OrderItemKey orderItemId = new OrderItemKey(orderItem.getOrder().getId(),orderItem.getDish().getId());
            orderItem.setId(orderItemId);
            orderItemRepository.save(orderItem);
        }
        return new String("got order");
    }
}
