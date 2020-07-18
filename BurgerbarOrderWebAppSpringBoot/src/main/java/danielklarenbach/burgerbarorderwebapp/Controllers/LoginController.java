package danielklarenbach.burgerbarorderwebapp.Controllers;

import lombok.Data;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {

    @RequestMapping("/user")
    public Auth user() {
        return new Auth("authenticated user");
    }

    @RequestMapping("/admin")
    public String admin() {
        return "authenticated admin";
    }

    @Data
    public class Auth{
        private String mess;

        public Auth(String authenticated_user) {
            this.mess=authenticated_user;
        }
    }
}
