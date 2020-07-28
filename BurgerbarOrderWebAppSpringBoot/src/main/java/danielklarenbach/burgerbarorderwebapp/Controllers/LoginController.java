package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.User;
import danielklarenbach.burgerbarorderwebapp.Repositories.UserRepository;
import lombok.Data;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/login")
    public User login(@RequestHeader("Authorization") String header) {
        String withoutBasic=header.substring(6);
        String userName=new String(Base64.decodeBase64(withoutBasic.getBytes())).split(":")[0];
        User user=userRepository.findByName(userName);
        return user;
    }
}
