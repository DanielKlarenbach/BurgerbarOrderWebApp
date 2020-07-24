package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.Dish;
import danielklarenbach.burgerbarorderwebapp.Models.User;
import danielklarenbach.burgerbarorderwebapp.Models.UserOrder;
import danielklarenbach.burgerbarorderwebapp.Repositories.OrderRepository;
import danielklarenbach.burgerbarorderwebapp.Repositories.UserRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Timestamp;

@RestController
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/order")
    public String getOrder(@RequestBody Dish[] dishes, @RequestHeader("Authorization") String header){
        /*for(Dish dish : dishes) {
            repository.save(new UserOrder());
        }*/
        String withoutBasic=header.substring(6);
        String userName=new String(Base64.decodeBase64(withoutBasic.getBytes())).split(":")[0];
        User user=userRepository.findByName(userName);
        orderRepository.save(new UserOrder(user,new Timestamp(new java.util.Date().getTime())));
        userRepository.save(new User("dsa","das","ROLE_USER"));
        return "got order";
    }
}
