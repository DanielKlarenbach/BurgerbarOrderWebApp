package danielklarenbach.burgerbarorderwebapp.Controllers;

import danielklarenbach.burgerbarorderwebapp.Models.User;
import danielklarenbach.burgerbarorderwebapp.Repositories.UserRepository;
import danielklarenbach.burgerbarorderwebapp.Security.UserPrinciple;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public void register(@RequestBody User clientUser){
        System.out.println(clientUser);
        userRepository.save(new User(clientUser.getName(),passwordEncoder.encode(clientUser.getPassword()),"ROLE_USER"));
    }
}
